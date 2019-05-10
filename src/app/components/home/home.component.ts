import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerService } from '../../services/server.service';

import { Book } from '../../models/book';
import { Subscription, Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  books: Book[];
  authors: Book[];
  uniqAuthors: Book[];
  msgs = [];
  subscription: Subscription;
  obsBooks: Observable<any>;
  obsAuthors: Observable<any>;
  all;

  auth = [
    { id: 1, title: 'Second', year: 1726, author: 'Jonathan Swift', genre: 'Adventure' },
    { id: 2, title: 'First', year: 1971, author: 'Jules Verne', genre: 'Novel' },
    { id: 3, title: 'Third', year: 1882, author: 'Robert Louis Stevenson', genre: 'Adventure' },
  ];

  constructor(
    public server: ServerService
  ) {}


  ngOnInit() {

    // Get all book

    this.server.getAllBooks().subscribe(res => {
      this.books = res;
      this.obsBooks = Observable.of(this.books);
      this.obsAuthors = Observable.of(this.auth);
      Observable
        .forkJoin(this.obsBooks, this.obsAuthors)
        .map(([s1, s2]) => [...s1, ...s2])
        .subscribe(res => console.log(res));
    });

    // Get all authors

    this.server.getAuthors().subscribe(res => {
      this.authors = res;

      // Get all uniq authors

      this.uniqAuthors = this.authors.filter((item, index, arr) =>
        index === arr.findIndex((uniq) => (
          uniq.author === item.author
        ))
      );

      this.uniqAuthorSort(this.uniqAuthors);

      // Add any authors to set routing from all books

      this.uniqAuthors.unshift({author: 'Any authors'});

    });

  }

  // Sort authors

   uniqAuthorSort(books) {

    books.sort(function (a, b) {
      if (a.author > b.author) {
        return 1;
      }
      if (a.author < b.author) {
        return -1;
      }
      return 0;
    });

  }

  // Get author

  getAuthor(event) {

    const author = event.value.author;
    if (author !== 'Any authors') {
      this.server.getAuthor(author).subscribe(res => this.books = res);
    } else {
      this.server.getAllBooks().subscribe(res => this.books = res);
    }

  }

  // Delete book

  deleteBook(book) {

    if (confirm('Do you want to delete this book?')) {
      this.server.deleteBook(book).subscribe(res => {
        const index = this.books.indexOf(book);
        this.books.splice(index,1);

        // Add delete message

        this.msgs.push({severity: 'error', summary: 'Book successfully deleted'});

        // Close delete message

        setTimeout(() => {
          this.msgs = [];
        }, 2000);
      });
    }

  }

  getNew(id) {
    return this.server.getNewBookId(id).pipe(
      map(res => {
        return res.title;
      })
    ).subscribe(res => console.log(res));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

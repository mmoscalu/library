import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';

import { Book } from '../../models/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[];
  uniqAuthors: Book[];
  msgs = [];

  constructor(
    public server: ServerService
  ) {}


  ngOnInit() {

    // Get all book

    this.server.getAllBooks().subscribe(res => {
      this.books = res;

      // Get all uniq authors

      this.uniqAuthors = this.books.filter((item, index, arr) =>
        index === arr.findIndex((uniq) => (
          uniq.author === item.author
        ))
      );

      this.uniqAuthorSort(this.uniqAuthors);

      // Add any authors to set routing from all books

      this.uniqAuthors.unshift( {author: 'Any authors'});



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

}

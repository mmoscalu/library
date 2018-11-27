import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';


import { Book } from '../../models/book';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public books: Book[];
  public uniqAuthors = [];
  public allAuthors = [];

  constructor(
    public server: ServerService
  ) {

  }


  ngOnInit() {

    // Get all book

    this.server.getAllBooks().subscribe(res => {
      this.books = res;
      // Get all authors
      this.getAllAuthor(this.books);

    });

  }

  // Get all authors

  getAllAuthor(books) {

    this.allAuthors = books.map(book => {
      return book.author;
    });

    // Get unique authors

    this.uniqAuthors = this.allAuthors.sort().filter(function(item, elem, arr) {
      return arr.indexOf(item) === elem;
    });

  }

  // Get author

  getAuthor(event) {

    const author = event.target.value;
    this.server.getAuthor(author).subscribe(res => this.books = res);

  }

  // Delete book

  deleteBook(book) {

    if (confirm('Do you want to delete this book?')) {

      this.server.deleteBook(book).subscribe(res => {
        const index = this.books.indexOf(book);
        this.books.splice(index,1);
      });

    }
  }

}

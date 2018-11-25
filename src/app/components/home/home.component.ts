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
  constructor(
    public server: ServerService
  ) {

  }


  ngOnInit() {
    this.server.getAllBooks().subscribe(data => {
      this.books = data;
    });

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

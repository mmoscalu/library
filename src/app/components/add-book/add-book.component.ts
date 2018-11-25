import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { Router} from '@angular/router';
import {Book} from '../../models/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  public book = {
    title: '',
    author: '',
    genre: '',
    year: null
  };

  constructor(
    private server: ServerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // add new book

  addBook(book) {
    this.server.addBook(book).subscribe(res => {
      this.router.navigate(['/']);
    });
  }

  // Cancel btn

  backBtn() {
    this.router.navigate(['/']);
  }

}

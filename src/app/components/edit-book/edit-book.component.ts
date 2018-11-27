import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  public bookId;
  public book = {};

  constructor(
    private server: ServerService,
    private router: Router,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.bookId = this.activatedRoute.snapshot.params['id'];
    this.server.getBookId(this.bookId).subscribe(res => this.book = res);
  }

  // Edit book

  editBook(book) {
    const updateBook = Object.assign({}, book);
    this.server.editBook(updateBook).subscribe(res => {
      this.router.navigate(['/']);
    });
  }

  // Cancel btn

  backBtn() {
    this.router.navigate(['/']);
  }
}

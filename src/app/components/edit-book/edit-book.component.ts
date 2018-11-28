import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  bookId;
  msgs = [];

  public book: any = {
    title: '',
    year: null,
    author: '',
    genre: ''
  };

  constructor(
    private server: ServerService,
    private router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.bookId = this.activatedRoute.snapshot.params['id'];
    this.server.getBookId(this.bookId).subscribe(res => this.book = res);

  }

  // Edit book

  editBook(book) {

    const updateBook = Object.assign({}, book);
    this.server.editBook(updateBook).subscribe(res => {
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 2000);
    });

  }

  // Cancel btn

  backBtn() {

    this.router.navigate(['/']);

  }

  // Show message

  showMessage() {

    this.msgs.push({severity: 'success', summary: 'Book successfully edited'});

  }

}

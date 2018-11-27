import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../services/server.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

  public bookId;
  public book: any = {
    title: '',
    year: null,
    author: '',
    genre: ''
  };

  constructor(
    private server: ServerService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.bookId = this.activatedRoute.snapshot.params['id'];
    this.server.getBookId(this.bookId).subscribe(book => this.book = book);

  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Book } from '../models/book';


@Injectable()
export class ServerService {

  constructor(
    private httpClient: HttpClient
  ) { }


  // set api url

  public booksUrl = 'api/books';

  // get all books

  getAllBooks(): Observable<Book[]> {

    return this.httpClient.get<Book[]>(this.booksUrl);

  }

  // get book from id

  getBookId(id): Observable<Book[]> {

    return this.httpClient.get<Book[]>(this.booksUrl + '/' + id);

  }

  // add new book

  addBook(book): Observable<Book[]> {

    const newBook = {
      title: book.title,
      author: book.author,
      year: book.year,
      genre: book.genre
    };

    return this.httpClient.post<Book[]>(this.booksUrl, newBook);

  }

  // Edit book

  editBook(book): Observable<Book[]> {

    const url = `${this.booksUrl}/?id=${book.id}`;
    return this.httpClient.put<Book[]>(url, book);

  }

  // Delete book

  deleteBook(book): Observable<Book[]> {

    const url = `${this.booksUrl}/${book.id}`;
    return this.httpClient.delete<Book[]>(url);

  }

}

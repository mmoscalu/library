import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../models/book';
import { map } from 'rxjs/operators';

@Injectable()
export class ServerService {

  constructor(
    private httpClient: HttpClient
  ) { }


  // Set api url

  public booksUrl = 'api/books';

  // Get all books

  getAllBooks(): Observable<Book[]>{
   return this.httpClient.get<Book[]>(this.booksUrl).pipe(
    map(data => {
      return data;
    })
   )
   

  }

  // Get book from id

  getBookId(id): Observable<Book[]> {

    const url = `${this.booksUrl}/${id}`;
    return this.httpClient.get<Book[]>(url);

  }

  // Add new book

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

  // Get all authors

  getAuthors(): Observable<Book[]> {

    const url = `${this.booksUrl}/?author`;
    return this.httpClient.get<Book[]>(url);

  }

  // Get author

  getAuthor(author): Observable<Book[]>{

    const url = `${this.booksUrl}/?author=${author}`;
    return this.httpClient.get<Book[]>(url);

  }

}

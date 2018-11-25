import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class DataBaseService implements InMemoryDbService{

  // Create database

  createDb() {

    const books = [
      { id: 1, title: 'Lorem 1', year: 1971, author: 'Lukas Uric', genre: 'lirick' },
      { id: 2, title: 'Lorem 2', year: 1971, author: 'Ioytr Loutr', genre: 'clasic' },
      { id: 3, title: 'Lorem 3', year: 1971, author: 'Jute Njui', genre: 'drame' },
      { id: 4, title: 'Lorem 4', year: 1971, author: 'Lortd Lpoi', genre: 'detective' },
      { id: 5, title: 'Lorem 5', year: 1971, author: 'Frytu Iorb', genre: 'amor' },
      { id: 6, title: 'Lorem 6', year: 1971, author: 'Lukas Uric', genre: 'lirick' },
      { id: 7, title: 'Lorem 5', year: 1971, author: 'Frytu Iorb', genre: 'amor' },
      { id: 8, title: 'Lorem 6', year: 1971, author: 'Lukas Uric', genre: 'lirick' }
    ];

    return {books};

  }

}

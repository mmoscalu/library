import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class DataBaseService implements InMemoryDbService{

  // Create database

  createDb() {

    const books = [
      { id: 1, title: 'Gulliver\'s Travels', year: 1726, author: 'Jonathan Swift', genre: 'Adventure' },
      { id: 2, title: 'The Thompson Travel Agency', year: 1971, author: 'Jules Verne', genre: 'Novel' },
      { id: 3, title: 'Treasure Island', year: 1882, author: 'Robert Louis Stevenson', genre: 'Adventure' },
      { id: 4, title: 'A Drama in the Air', year: 1851, author: 'Jules Verne', genre: 'Short stories' },
      { id: 5, title: 'The Call of the Wild', year: 1903, author: 'Jack London', genre: 'Adventure' },
      { id: 6, title: 'White Fang', year: 1906, author: 'Jack London', genre: 'Adventure' },
      { id: 7, title: 'The Danube Pilot', year: 1908, author: 'Jules Verne', genre: 'Novel' },
      { id: 8, title: 'A Modest Proposal ', year: 1729, author: 'Jonathan Swift', genre: 'Satire' }
    ];

    return {books};

  }

}

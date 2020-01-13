import { Component, OnInit } from '@angular/core';

import { BookFactory } from '../shared/book-factory';

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  book = BookFactory.empty();

  constructor() { }

  ngOnInit() {
  }

}

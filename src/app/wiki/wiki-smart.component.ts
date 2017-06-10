import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-my-wiki-smart',
  template: `
    <h1>Smarter Wikipedia Demo</h1>
    <p>Search when typing stops</p>
    <input #term (keyup)="search(term.value)"/>
    <ul>
      <li *ngFor="let item of items | async">{{item}}</li>
    </ul>`,
  providers: [ WikipediaService ]
})

export class WikiSmartComponent implements OnInit {
  items: Observable<string[]>;

  // turns keystrokes in observable stream of seach terms via Subject
  private searchTermStream = new Subject<string>();

  constructor (private wikipediaService: WikipediaService) {
  }

  search(term: string) {
    this.searchTermStream.next(term);
  }

  ngOnInit() {
    this.items = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string) => this.wikipediaService.search(term));
  }
}

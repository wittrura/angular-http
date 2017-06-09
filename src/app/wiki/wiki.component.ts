import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-my-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css'],
  providers: [WikipediaService]
})
export class WikiComponent implements OnInit {
  items: Observable<string[]>;

  constructor(private wikipediaService: WikipediaService) { }

  ngOnInit() {
  }

  search(term: string) {
    this.items = this.wikipediaService.search(term);
  }

}

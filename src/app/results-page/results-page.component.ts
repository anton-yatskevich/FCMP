import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import * as articlesList from '../../assets/articles-mock.json';
import * as sources from '../../assets/sources-mock.json';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})

export class ResultsPageComponent implements OnInit {
  public articles: object[];
  public sources: string[] = sources;
  public selectedSource: string;
  public char: string = 'Conor';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.articles = articlesList.slice(0, 4);
  }

  onChangeSource(source: string): void {
    this.selectedSource = source;
  }

  isAllNewsLoaded(): boolean {
    return articlesList.length === this.articles.length
  }

  onLoadMoreClick(): void {
    if (!this.isAllNewsLoaded()) {  
      this.articles = articlesList.slice(0, this.articles.length + 5);
    }
  }

  onDeleteClick(): void {

  }
}

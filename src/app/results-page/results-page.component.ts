import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import * as articlesList from '../../assets/articles-mock.json';
import * as sources from '../../assets/sources-mock.json';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})

export class ResultsPageComponent implements OnInit {
  public articles: object[] = [];
  public sources: string[] = sources;
  public selectedSource: string;
  public query: string;
  public limit: number = 4;
  public onlyLocal: boolean = false;

  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.articlesService.updateFiterValue.subscribe((value: string) => {
      this.query = value;
    });
    this.articlesService.updateLocalFilter.subscribe((localFilterValue: boolean) => {
      this.onlyLocal = localFilterValue;
    });
    this.articlesService.updateArticles.subscribe((articles: [{}]) => {
      this.articles = articles;
      this.limit = 4;
    });
  }

  isAllNewsLoaded(): boolean {
    return this.articles.length <= this.limit;
  }

  onLoadMoreClick(): void {
    if (!this.isAllNewsLoaded()) {  
      this.limit += 3;
    }
  }

  onDeleteClick(): void {

  }
}

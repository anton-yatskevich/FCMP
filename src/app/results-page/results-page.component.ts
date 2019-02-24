import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../models/Article';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})

export class ResultsPageComponent implements OnInit {
  public articles: Array<Article> = [];
  public selectedSource: string;
  public query: string;
  public limit: number = 4;
  public onlyLocal: boolean = false;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.getArticles().subscribe((articles) => {
      this.articles = articles;
    })
    this.articlesService.updateFiterValue.subscribe((value: string) => {
      this.query = value;
    });
    this.articlesService.updateLocalFilter.subscribe((localFilterValue: boolean) => {
      this.onlyLocal = localFilterValue;
    });
    this.articlesService.updateArticles.subscribe((articles: Array<Article>) => {
      this.articles = articles;
      this.limit = 4;
    });
  }

  public isAllNewsLoaded(): boolean {
    return this.articles.length <= this.limit;
  }

  public onLoadMoreClick(): void {
    if (!this.isAllNewsLoaded()) {  
      this.limit += 3;
    }
  }
}

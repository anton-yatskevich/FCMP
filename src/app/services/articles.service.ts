import { Injectable, EventEmitter } from '@angular/core';
import { Source, SourcesResponse } from '../models/Source';
import { Article, ArticleResponse } from '../models/Article';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { SOURCES_URL, API_KEY, NEWS_BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public articles: Array<Article>;
  public source: string = 'local';
  public updatedSource: EventEmitter<string> = new EventEmitter();
  public updateFiterValue: EventEmitter<string> = new EventEmitter();
  public updateArticles: EventEmitter<any> = new EventEmitter();
  public updateLocalFilter: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getSources() {
    return this.http.get<SourcesResponse>(SOURCES_URL)
      .pipe(
        map((response: SourcesResponse) => {
          return response.sources;
        })
    );
  }

  onChangeSource(source: Source) {
    this.updatedSource.emit(source.name);
    this.source = source.id;
    this.getArticles().subscribe(
      (response) => {
        this.articles = response;
        this.updateArticles.emit(this.articles);
      },
      (error) => console.log(error)
    );;
  }

  getArticles() {
    const articlesUrl = this.source === 'local' ? 'https://frontcamp-node.herokuapp.com/news' : `${NEWS_BASE_URL}${this.source}${API_KEY}`;

    return this.http.get<ArticleResponse>(articlesUrl)
      .pipe(
        map((response: ArticleResponse) => {
          return response.articles;
        })
    );
  }
}

import { Injectable, EventEmitter } from '@angular/core';
import { Source, SourcesResponse } from '../models/Source';
import { Article, ArticleResponse } from '../models/Article';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { SOURCES_URL, API_KEY, NEWS_BASE_URL, LOCAL_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public updatedSource: EventEmitter<string> = new EventEmitter();
  public updateFiterValue: EventEmitter<string> = new EventEmitter();
  public updateArticles: EventEmitter<any> = new EventEmitter();
  public updateLocalFilter: EventEmitter<boolean> = new EventEmitter();
  public updatedHeader: EventEmitter<string> = new EventEmitter();
  private articles: Array<Article>;
  private source: string = 'local';
  private httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

  constructor(private http: HttpClient) { }

  public getSources() {
    return this.http.get<SourcesResponse>(SOURCES_URL)
      .pipe(
        map((response: SourcesResponse) => {
          return response.sources;
        })
    );
  }

  public onChangeSource(source: Source) {
    this.updatedSource.emit(source.name);
    this.updatedHeader.emit(source.name);
    this.source = source.id;
    this.getArticles().subscribe();
  }

  public getArticles() {
    const articlesUrl = this.source === 'local' ? `${LOCAL_URL}/news` : `${NEWS_BASE_URL}${this.source}${API_KEY}`;

    return this.http.get<ArticleResponse>(articlesUrl)
      .pipe(
        map((response: ArticleResponse) => {
          if (this.source === 'local') {
            this.articles = response.articles;
            this.updateArticles.emit(this.articles);
            return this.articles;
          }
          this.articles = response.articles.map((article, index) => {
            return {...article, _id: '' + index }
          });
          this.updateArticles.emit(this.articles);
          return this.articles;
        })
    );
  }

  public getArticleById(id) {
    return this.articles.filter(article => article._id === id)[0];
  }

  public deleteArticleById(id) {
    this.articles = this.articles.filter(article => article._id !== id);
    this.updateArticles.emit(this.articles);
    this.http.delete(`${LOCAL_URL}/news/${id}`, { ...this.httpOptions, responseType: 'text'}).subscribe();
  }

  public addArticle(article) {
    this.http.post(`${LOCAL_URL}/news`, JSON.stringify(article), { ...this.httpOptions, responseType: 'text'}).subscribe(() => {
      this.getArticles().subscribe();
    });
  }

  public editArticle(article, id) {
    this.http.put(`${LOCAL_URL}/news/${id}`, JSON.stringify(article), { ...this.httpOptions, responseType: 'text'}).subscribe(() => {
      this.getArticles().subscribe();
    });
  }
}

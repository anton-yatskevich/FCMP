import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { SourcesResponse } from '../models/responses';
import { API_KEY, TOP_NEWS_BASE_URL, SOURCES_BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getSources() {
    return this.http.get<SourcesResponse>(`${SOURCES_BASE_URL}country=us&apiKey=${API_KEY}`)
      .pipe(
        map((response: SourcesResponse) => {
          return response.sources.map(item => item.name);
        })
    );
  }

  public getArticles(channel: string): object[] {
    return []
  }
}

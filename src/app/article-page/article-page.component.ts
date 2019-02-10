import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as articles from '../../assets/articles-mock.json';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})

export class ArticlePageComponent implements OnInit, OnDestroy {
  id: number;
  article: object;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.article = articles.find(item => item.id === this.id);
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
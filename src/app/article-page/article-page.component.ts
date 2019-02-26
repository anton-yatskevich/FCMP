import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../models/Article';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})

export class ArticlePageComponent implements OnInit {
  public article: Article;
  private id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.article = this.articlesService.getArticleById(this.id);
  }

  public onDeleteHandler() {
    this.articlesService.deleteArticleById(this.id);
    this.router.navigate(['/results']);
  }
}
import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {  }

  public onDeleteHandler() {
    this.articlesService.deleteArticleById(this.article._id);
  }
}

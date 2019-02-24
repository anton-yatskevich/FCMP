import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../models/Article';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})

export class EditPageComponent implements OnInit {
  public articleHeading: FormControl = new FormControl('', Validators.required);
  public articleShortDescription: FormControl = new FormControl('', Validators.required);
  public articleContent: FormControl = new FormControl('', Validators.required);
  public imageUrl: FormControl = new FormControl('', Validators.required);
  public author: FormControl = new FormControl('', Validators.required);
  public source: FormControl = new FormControl('', Validators.required);
  public articleUrl: FormControl = new FormControl('', Validators.required);
  public date: FormControl = new FormControl('', (Validators.required));
  public articleForm: FormGroup = new FormGroup({
    heading: this.articleHeading,
    decription: this.articleShortDescription,
    content: this.articleContent,
    imageUrl: this.imageUrl,
    author: this.author,
    source: this.source,
    articleUrl: this.articleUrl,
  });
  public pageTitle: string = 'Create article';
  private id: string;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.pageTitle = 'Edit article';
      const article = this.articlesService.getArticleById(this.id);
      if (article) {
        this.setFormValues(article);
      }
    }
    this.articlesService.updatedHeader.emit(this.pageTitle);
  }

  private setFormValues(article: Article): void {
    this.articleHeading.setValue(article.title);
    this.articleShortDescription.setValue(article.description);
    this.articleContent.setValue(article.content);
    this.imageUrl.setValue(article.urlToImage);
    this.articleUrl.setValue(article.url);
    this.author.setValue(article.author);
    this.source.setValue(article.source.name);
  }

  public submitForm(): void {
    if (this.articleForm.valid) {
      const article: Article = {
        source: {
          name: this.source.value
        },
        author: this.author.value,
        title: this.articleHeading.value,
        description: this.articleShortDescription.value,
        url: this.articleUrl.value,
        urlToImage: this.imageUrl.value,
        publishedAt: Date.now(),
        content: this.articleContent.value,
      }
      if (this.id) {
        this.articlesService.editArticle(article, this.id);
      } else {
        this.articlesService.addArticle(article);
      }
      this.router.navigate(['/results']);
    }
  }
}
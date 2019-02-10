import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as articles from '../../assets/articles-mock.json';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  public articleHeading: FormControl = new FormControl('', Validators.required);
  public articleShortDescription: FormControl = new FormControl('', Validators.required);
  public articleContent: FormControl = new FormControl('', Validators.required);
  public imageUrl: FormControl = new FormControl('', Validators.required);
  public author: FormControl = new FormControl('', Validators.required);
  public source: FormControl = new FormControl('', Validators.required);
  public date: FormControl = new FormControl('', (Validators.required));
  public articleForm: FormGroup = new FormGroup({
    heading: this.articleHeading,
    decription: this.articleShortDescription,
    content: this.articleContent,
    imageUrl: this.imageUrl,
    author: this.author,
    source: this.source,
    date: this.date
  });
  public id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = +params['id']; 
        let article = articles.find(item => item.id === this.id);
        if (article) {
          this.setFormValues(article);
        }
      }
    });
  }

  private setFormValues(article: any): void {
    this.articleHeading.setValue(article.title);
    this.articleShortDescription.setValue(article.description);
    this.articleContent.setValue(article.content);
    this.imageUrl.setValue(article.urlToImage);
    this.author.setValue(article.author);
    this.source.setValue(article.url);
    this.date.setValue(article.publishedAt);
  }

  public submitForm(): void {
    if(this.articleForm.valid){
      console.log(this.articleForm)
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticlePageComponent } from './article-page.component';
import { ArticlesService } from '../services/articles.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ArticlePageComponent', () => {
  let component: ArticlePageComponent;
  let fixture: ComponentFixture<ArticlePageComponent>;
  const mockArticle = {
    author: "David BardenG",
    content: "Pete Davidson appeared to be back in fine form on Saturday Night Live, jumping back on the Weekend Update desk after what he called his really crazy month. In December, the comedian posted an alarming personal message on Instagram that sparked concerns he was",
    description: "Pete Davidson appeared to be back in fine form on Saturday Night Live, jumping back on the Weekend Update desk after what he called his really crazy month.",
    isLocal: true,
    publishedAt: 2018,
    source: {name: "CNN"},
    title: "Pete Davidson Returns 'Weekend Update' Desk With John Mulaney - HuffPost",
    url: "https://www.huffingtonpost.com/entry/pete-davidson-snl-john-mulaney_us_5c441606e4b027c3bbc271e6",
    urlToImage: "https://img.huffingtonpost.com/asset/5c4417a225000026017db659.png?cache=fytlpun2yi&ops=1910_1000",
    _id: "1111",
  };
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const fakeArticleService = { 
    getArticleById: (id: string) => mockArticle,
    deleteArticleById: (id: string) => null
  };
  let getArticleSpyOn: jasmine.Spy;
  let deleteArticleSpyOn: jasmine.Spy;


  beforeEach(async(() => {
    getArticleSpyOn = spyOn(fakeArticleService, 'getArticleById').and.callThrough();
    deleteArticleSpyOn = spyOn(fakeArticleService, 'deleteArticleById').and.callThrough();
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ ArticlePageComponent ],
      providers: [
        { provide: ArticlesService, useValue: fakeArticleService },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: 123 } } } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getArticleById after initialization with id param', () => {
    component.ngOnInit();
    expect(getArticleSpyOn).toHaveBeenCalledWith(123);
  });

  it('should call deleteArticleById after calling onDelete hander', () => {
    component.onDeleteHandler();
    expect(deleteArticleSpyOn).toHaveBeenCalledWith(123);
  });
});

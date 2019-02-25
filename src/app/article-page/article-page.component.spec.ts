import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ArticlePageComponent } from './article-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ArticlesService } from '../services/articles.service';
import { Component, Directive, NO_ERRORS_SCHEMA } from '@angular/core';

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
    _id: "5c544bb03d5be9da70f46289",
  };
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  @Component({
    template: `
      <router-outlet></router-outlet>
    `
  })
  class RoutingComponent { }
  
  @Component({
    template: ''
  })
  class MockComponent { }

  @Directive({
    selector: '[routerLink], [routerLinkActive], [ActivatedRoute]'
  })
  class DummyRouterLinkDirective {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ ArticlePageComponent, RoutingComponent, DummyRouterLinkDirective, MockComponent ],
      imports: [ ],
      providers: [
        ArticlesService,
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePageComponent);
    component = fixture.componentInstance;
    component.article = mockArticle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

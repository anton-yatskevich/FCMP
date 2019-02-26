import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlesService } from '../../services/articles.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ArticleItemComponent } from './article-item.component';

describe('ArticleItemComponent', () => {
  let component: ArticleItemComponent;
  let fixture: ComponentFixture<ArticleItemComponent>;
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
  const fakeArticleService = { 
    deleteArticleById: (id: string) => null,
  };
  let deleteArticleById: jasmine.Spy;

  beforeEach(async(() => {
    deleteArticleById = spyOn(fakeArticleService, 'deleteArticleById').and.callThrough();
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ ArticleItemComponent ],
      providers: [
        { provide: ArticlesService, useValue: fakeArticleService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleItemComponent);
    component = fixture.componentInstance;
    component.article = mockArticle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call delete btn handler after click', () => {
    spyOn(component, 'onDeleteHandler');
    const deleteBtn = fixture.debugElement.nativeElement.querySelector('.delete-btn');
    deleteBtn.click();
    expect(component.onDeleteHandler).toHaveBeenCalled();
  });

  it('should call deleteArticleById service method after clicking on delete btn', () => {
    component.onDeleteHandler()
    expect(deleteArticleById).toHaveBeenCalledWith('1111');
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ArticlesService } from '../services/articles.service';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const fakeArticleService = {
    updatedHeader: of('Updated value'),
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        { provide: ArticlesService, useValue: fakeArticleService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render passed title', () => {
    component.title = 'Test title';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.page-header').textContent).toBe('Test title');
  });

  it('should render updated title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.page-header').textContent).toBe('Updated value');
  });

});

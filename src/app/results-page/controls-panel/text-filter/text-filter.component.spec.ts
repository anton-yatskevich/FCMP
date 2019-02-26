import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TextFilterComponent } from './text-filter.component';
import { ArticlesService } from '../../../services/articles.service';
import { of } from 'rxjs';

describe('TextFilterComponent', () => {
  let component: TextFilterComponent;
  let fixture: ComponentFixture<TextFilterComponent>;
  let updateFilter: jasmine.Spy;
  const fakeArticleService = {
    updateFiterValue: {
      emit: () => {}
    },
  };


  beforeEach(async(() => {
    updateFilter = spyOn(fakeArticleService.updateFiterValue, 'emit').and.callThrough();
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ TextFilterComponent ],
      providers: [
        { provide: ArticlesService, useValue: fakeArticleService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call filter btn handler after click', () => {
    spyOn(component, 'onFilterClick');
    const filterBtn = fixture.debugElement.nativeElement.querySelector('.filter-btn');
    filterBtn.click();
    expect(component.onFilterClick).toHaveBeenCalled();
  });

  it('should emit updateFiterValue service method after clicking on filter btn', () => {
    component.onFilterClick('value');
    expect(updateFilter).toHaveBeenCalledWith('value');
  });
});

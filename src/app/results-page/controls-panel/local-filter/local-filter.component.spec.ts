import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalFilterComponent } from './local-filter.component';

describe('LocalFilterComponent', () => {
  let component: LocalFilterComponent;
  let fixture: ComponentFixture<LocalFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});

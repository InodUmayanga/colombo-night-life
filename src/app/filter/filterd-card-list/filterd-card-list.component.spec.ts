import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterdCardListComponent } from './filterd-card-list.component';

describe('FilterdCardListComponent', () => {
  let component: FilterdCardListComponent;
  let fixture: ComponentFixture<FilterdCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterdCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterdCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

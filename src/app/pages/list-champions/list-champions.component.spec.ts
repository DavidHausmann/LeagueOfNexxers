import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChampionsComponent } from './list-champions.component';

describe('ListChampionsComponent', () => {
  let component: ListChampionsComponent;
  let fixture: ComponentFixture<ListChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChampionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});

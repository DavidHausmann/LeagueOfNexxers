import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionDetailsComponent } from './champion-details.component';

describe('ChampionDetailsComponent', () => {
  let component: ChampionDetailsComponent;
  let fixture: ComponentFixture<ChampionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsAndAwardsComponent } from './achievements-and-awards.component';

describe('AchievementsAndAwardsComponent', () => {
  let component: AchievementsAndAwardsComponent;
  let fixture: ComponentFixture<AchievementsAndAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementsAndAwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsAndAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

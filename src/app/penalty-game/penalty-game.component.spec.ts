import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyGameComponent } from './penalty-game.component';

describe('PenaltyGameComponent', () => {
  let component: PenaltyGameComponent;
  let fixture: ComponentFixture<PenaltyGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PenaltyGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenaltyGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

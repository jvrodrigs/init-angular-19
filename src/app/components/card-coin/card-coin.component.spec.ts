import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCoinComponent } from './card-coin.component';

describe('CardCoinComponent', () => {
  let component: CardCoinComponent;
  let fixture: ComponentFixture<CardCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

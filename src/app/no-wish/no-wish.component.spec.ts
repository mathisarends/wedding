import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoWishComponent } from './no-wish.component';

describe('NoWishComponent', () => {
  let component: NoWishComponent;
  let fixture: ComponentFixture<NoWishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoWishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

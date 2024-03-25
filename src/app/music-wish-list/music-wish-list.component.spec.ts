import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicWishListComponent } from './music-wish-list.component';

describe('MusicWishListComponent', () => {
  let component: MusicWishListComponent;
  let fixture: ComponentFixture<MusicWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicWishListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

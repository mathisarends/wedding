import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { HomeGridComponent } from '../home-grid/home-grid.component';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  imports: [CarouselComponent, HomeGridComponent],
})
export class LandingPageComponent {}

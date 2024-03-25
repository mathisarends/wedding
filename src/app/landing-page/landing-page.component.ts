import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  imports: [CarouselComponent]
})
export class LandingPageComponent {

}

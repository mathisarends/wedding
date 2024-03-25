import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

import { CarouselComponent } from '../carousel/carousel.component';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CarouselComponent, ButtonComponent, RouterModule]
})
export class HeaderComponent {

}

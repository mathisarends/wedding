import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  constructor(private router: Router) { }

  redirectToDresscode() {
    console.log("testa");
    this.router.navigate(["/dresscode"]);
  }

  redirectToMusic() {
    this.router.navigate(["/music"]);
  }

  redirectToWishList() {
    this.router.navigate(["/wishlist"]);
  }
}

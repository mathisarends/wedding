import { Component, Input } from '@angular/core';
import { IMusicWish } from '../wishlist/IMusicWish';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from "../pagination/pagination.component";

import { NoWishComponent } from '../no-wish/no-wish.component';

@Component({
  selector: 'app-music-wish-list',
  standalone: true,
  templateUrl: './music-wish-list.component.html',
  styleUrl: './music-wish-list.component.css',
  imports: [CommonModule, PaginationComponent, NoWishComponent]
})




export class MusicWishListComponent {
  @Input() musicWishes: IMusicWish[] = [];



}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IMusicWish } from '../wishlist/IMusicWish';
import { MusicWishListComponent } from "../music-wish-list/music-wish-list.component";

@Component({
  selector: 'app-music',
  standalone: true,
  templateUrl: './music.component.html',
  styleUrl: './music.component.css',
  imports: [CommonModule, ReactiveFormsModule, MusicWishListComponent]
})

export class MusicComponent {

  musicForm = new FormGroup({
    interpret: new FormControl("", Validators.required),
    title: new FormControl("", Validators.required),
  })

  musicWishes: IMusicWish[] = [];

  makeWish(event: Event) {

    event.preventDefault();

    if (this.musicForm.valid) {

      const newWish: IMusicWish = {
        interpret: this.musicForm.get('interpret')!.value!,
        title: this.musicForm.get('title')!.value!
      }

      this.musicWishes.push(newWish);
      this.musicForm.reset();
    }
  }
}

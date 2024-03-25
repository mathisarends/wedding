import { Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { DresscodeComponent } from './dresscode/dresscode.component';
import { MusicComponent } from './music/music.component';
import { WishlistComponent } from './wishlist/wishlist.component';

export const routes: Routes = [
    { path: "", component: LandingPageComponent },
    { path: "dresscode", component: DresscodeComponent },
    { path: "music", component: MusicComponent },
    { path: "wishlist", component: WishlistComponent }
];

import { Component, computed, inject, Signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from "@angular/material/button"
import { PassportService } from '../_service/passport-service';
import {MatMenuModule} from '@angular/material/menu';
import { Sign } from 'crypto';
import { Router, RouterLinkActive, RouterLinkWithHref } from "@angular/router";


@Component({
  selector: 'app-navbar',
  imports: [
    MatSlideToggleModule,
    MatToolbarModule,
    MatButton,
    MatButtonModule,
    MatMenuModule,
    RouterLinkActive,
    RouterLinkWithHref
],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar { 
  private _passport = inject(PassportService)
  display_name:Signal<string | undefined>
  avatar_url:Signal<string | undefined>

  constructor() {
    this.display_name = computed(() => this._passport.data()?.display_name)
    this.avatar_url = computed(() => this._passport.data()?.arvatar_url)
  }
}

// logout() {
//   this._passport.destroy()
//   const _router = inject(Router)
//   this._router.navigate(['/login'])
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(public router: Router) {}

  getHome() {
    this.router.navigate(['/home']);
  }

  getSomos() {
    this.router.navigate(['/sobre']);
  }

  getBlog() {
    this.router.navigate(['/blog']);
  }

  getLogin() {
    this.router.navigate(['/login']);
  }
}

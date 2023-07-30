import { Component } from '@angular/core';

@Component({
  selector: 'app-top-head',
  templateUrl: './top-head.component.html',
  styleUrls: ['./top-head.component.css']
})
export class TopHeadComponent {
  isMobileMenuOpen: boolean = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

}

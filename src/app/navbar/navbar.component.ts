import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMenuOpen = false;

  isScrolled = false;
  @HostListener('window:scroll')
  onWindowScroll() {
    window.scrollY >= 80 ? (this.isScrolled = true) : (this.isScrolled = false)
  }

  constructor() {
    // 
  }

  ngOnInit(): void {
    // 
  }

  toggleNavbarMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}

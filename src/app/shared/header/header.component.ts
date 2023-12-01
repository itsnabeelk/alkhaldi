import { Component, HostListener, OnInit } from '@angular/core';
// declare function scriptMain(): void;
// declare function bannerScript(): void;
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {


  isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }


  ngOnInit(): void {
    const burgerBtn = document.querySelector('.burger-btn') as HTMLElement;
    const menuWrapper = document.querySelector('.menu-wrapper') as HTMLElement;
    const menuCloseBtn = document.querySelector('.menu-overlay__close') as HTMLElement;

    // Toggle the menu overlay
    function toggleMenu() {
      menuWrapper.style.display = 'block';
    }

    // Close the menu overlay
    function closeMenu() {
      menuWrapper.style.display = 'none';
    }

    // Attach event listeners
    burgerBtn.addEventListener('click', toggleMenu);
    menuCloseBtn.addEventListener('click', closeMenu);
  }
}
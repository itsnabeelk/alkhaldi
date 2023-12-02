import { Component, HostListener, OnInit } from '@angular/core';
declare function scriptMain(): void;
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
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
    scriptMain();
    const burgerBtn = document.querySelector('.burger-btn') as HTMLElement;
    const menuWrapper = document.querySelector('.menu-wrapper') as HTMLElement;
    const menuCloseBtn = document.querySelector('.menu-overlay__close') as HTMLElement;
    const menuLinks = document.querySelectorAll('.menu-overlay__link') as NodeListOf<HTMLElement>;
  
    // Toggle the menu overlay
    function toggleMenu() {
      menuWrapper.style.display = 'block';
      window.scrollTo(0, 0);
    }
  
    // Close the menu overlay
    function closeMenu() {
      menuWrapper.style.display = 'none';
    }
  
    // Attach event listeners
    burgerBtn.addEventListener('click', toggleMenu);
    menuCloseBtn.addEventListener('click', closeMenu);
  
    // Close the menu overlay when any link is clicked
    menuLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }
  
}
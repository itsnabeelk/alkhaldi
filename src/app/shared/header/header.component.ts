import { Component, HostListener, OnInit } from '@angular/core';
declare function scriptMain(): void;
import { RouterModule } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  
  isScrolled = false;
  router: any;
  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }
  closeOffcanvas(): void {
    const offcanvasElement = document.getElementById('offcanvasDarkNavbar') as HTMLElement;
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    if (offcanvas) {
      offcanvas.hide();
    }
  }

  ngOnInit(): void {
    scriptMain();
    const offcanvasElement = document.getElementById('offcanvasDarkNavbar') as HTMLElement;
    const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
    offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
      offcanvasElement.classList.remove('show'); // Remove the 'show' class
      offcanvasElement.style.paddingRight = ''; // Reset padding
      document.body.style.overflow = ''; // Reset body overflow
    });
  }
  
}
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

  }
  
}
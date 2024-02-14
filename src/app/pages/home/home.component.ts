import { Component } from '@angular/core';
declare function scriptMain(): void;
declare function logoScript(): void;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit(): void {
    scriptMain();
    logoScript();
    window.addEventListener('load', () => {
      window.scrollTo(0, 0);
    });
  }
}

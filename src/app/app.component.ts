import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { PreloaderComponent } from "./component/preloader/preloader.component";
import { Router, NavigationEnd } from '@angular/router';
declare function scriptMain(): void;

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, PreloaderComponent]
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'alkhaldi';
  ngOnInit(): void {
    scriptMain();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}

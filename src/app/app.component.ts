import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { PreloaderComponent } from "./component/preloader/preloader.component";
declare function scriptMain(): void;

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, PreloaderComponent]
})
export class AppComponent {
  title = 'alkhaldi';
  ngOnInit(): void {
    scriptMain();
  }
}

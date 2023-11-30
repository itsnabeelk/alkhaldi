import { Component } from '@angular/core';
import { BannerComponent } from "../../component/banner/banner.component";
declare function scriptMain(): void;
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [BannerComponent]
})
export class HomeComponent {
  ngOnInit(): void {
    scriptMain();
  }
}

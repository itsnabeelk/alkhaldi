import { Component } from '@angular/core';
import { BannerComponent } from "../../component/banner/banner.component";
import { TimelineComponent } from "../../component/timeline/timeline.component";
import { RouterModule } from '@angular/router';
declare function scriptMain(): void;
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [BannerComponent, TimelineComponent, RouterModule]
})
export class HomeComponent {
  ngOnInit(): void {
    scriptMain();
    window.addEventListener('load', () => {
      window.scrollTo(0, 0);
    });
  }
  
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TimelineComponent } from "../../component/timeline/timeline.component";
declare function scriptMain(): void;
@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [RouterModule, TimelineComponent]
})
export class AboutComponent {
  ngOnInit(): void {
    scriptMain();
  }
}

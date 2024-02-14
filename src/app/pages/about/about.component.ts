import { Component } from '@angular/core';
declare function scriptMain(): void;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  ngOnInit(): void {
    scriptMain();
  }
}

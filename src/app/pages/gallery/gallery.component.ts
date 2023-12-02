import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
declare function scriptMain(): void;
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  
  ngOnInit(): void {
    scriptMain();
  }
}

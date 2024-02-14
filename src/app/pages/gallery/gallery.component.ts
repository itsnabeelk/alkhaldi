import { Component } from '@angular/core';
declare function scriptMain(): void;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  ngOnInit(): void {
    scriptMain();
  }
}

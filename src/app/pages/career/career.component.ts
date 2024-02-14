import { Component } from '@angular/core';
declare function UploadbTN():void;
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
  ngOnInit(): void {
    UploadbTN();
  }
}

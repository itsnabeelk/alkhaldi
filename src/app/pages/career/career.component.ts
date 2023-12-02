import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
declare function UploadbTN():void;
@Component({
  selector: 'app-career',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
  ngOnInit(): void {
    UploadbTN();
  }
}

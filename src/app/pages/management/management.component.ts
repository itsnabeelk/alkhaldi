import { Component } from '@angular/core';
declare function scriptMain(): void;
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent {
  ngOnInit(): void {
    scriptMain();
  }
}

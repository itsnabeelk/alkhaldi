import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
declare function scriptMain(): void;
@Component({
  selector: 'app-management',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent {
  ngOnInit(): void {
    scriptMain();
  }
}

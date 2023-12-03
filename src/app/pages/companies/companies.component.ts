import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
declare function scriptMain(): void;
@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent {
  ngOnInit(): void {
    scriptMain();
  }
}

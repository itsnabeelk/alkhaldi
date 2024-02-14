import { Component } from '@angular/core';
declare function scriptMain(): void;
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent {
  ngOnInit(): void {
    scriptMain();
  }
}

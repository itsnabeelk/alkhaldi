import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
declare function scriptMain(): void;
declare var $: any;
@Component({
  selector: 'app-social',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent {
  ngOnInit(): void {
    scriptMain();
    $('#datepicker').datepicker();
  }
}

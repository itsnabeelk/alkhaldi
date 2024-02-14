import { Component } from '@angular/core';
declare function scriptMain(): void;
declare var $: any;
@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent {
  ngOnInit(): void {
    scriptMain();
    $('#datepicker').datepicker();
  }
}

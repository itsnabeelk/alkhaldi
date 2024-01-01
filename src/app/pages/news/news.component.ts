import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  ngOnInit(): void {
    $('#datepicker').datepicker();
  }
}

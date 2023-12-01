import { Component } from '@angular/core';
declare function timeLine(): void;
@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  ngOnInit(): void {
    timeLine();
  }
}

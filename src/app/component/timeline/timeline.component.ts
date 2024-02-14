import { Component } from '@angular/core';
declare function timeLine(): void;
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  ngOnInit(): void {
    timeLine();
  }
}

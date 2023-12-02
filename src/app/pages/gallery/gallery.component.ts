import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
declare var $: any; // Add this line if jQuery is not already imported

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initializeGallery();
  }

  private initializeGallery(): void {
    var $grid = $('.conbix__filter-active').isotope();
    $('.conbix__filter-button').on('click', 'button', function(this: HTMLElement) {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });
    $('.conbix__filter-button').on('click', 'button', function(this: HTMLElement) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
    });
  }

  ngOnInit(): void {
    $(window).on('load', () => {
      this.initializeGallery();
    });
  }
}
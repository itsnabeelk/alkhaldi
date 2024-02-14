import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  ngOnInit() {
    const scrollPath = document.querySelector('.scroll-up path') as SVGPathElement;
    const pathLength = scrollPath.getTotalLength();
    scrollPath.style.transition = scrollPath.style.webkitTransition = 'none';
    scrollPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    scrollPath.style.strokeDashoffset = `${pathLength}`;
    scrollPath.getBoundingClientRect();
    scrollPath.style.transition = scrollPath.style.webkitTransition = 'stroke-dashoffset 10ms linear';

    const updatescroll = () => {
      const scroll = window.pageYOffset;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const offset = pathLength - (scroll * pathLength / height);
      scrollPath.style.strokeDashoffset = `${offset}`;
    };

    updatescroll();
    window.addEventListener('scroll', updatescroll);

    const offset = 50;
    const duration = 950;
    window.addEventListener('scroll', () => {
      const scrollUpElement = document.querySelector('.scroll-up');
      if (scrollUpElement) {
        if (window.pageYOffset > offset) {
          scrollUpElement.classList.add('active-scroll');
        } else {
          scrollUpElement.classList.remove('active-scroll');
        }
      }
    });

    const scrollUpElement = document.querySelector('.scroll-up');
    if (scrollUpElement) {
      scrollUpElement.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }
}

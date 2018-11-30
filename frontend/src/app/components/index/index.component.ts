import { Component, OnInit, AfterContentChecked, AfterViewInit } from '@angular/core';

declare const M: any;

let entre = false;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit, AfterViewInit  {

  constructor() {
  }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      // const elems = document.querySelectorAll('.slider');
      // const instances = M.Slider.init(elems, {indicators: true, duration: 500, interval: 5000});

      const elems2 = document.querySelectorAll('.carousel');
      const instances2 = M.Carousel.init(elems2, {indicators: true, duration: 200, fullWidth: true});
    });
  }

  autoplay() {
    const elem = document.querySelector('.carousel');
    const element = M.Carousel.getInstance(elem);
    element.next();
    setTimeout(this.autoplay, 4500);
    }

  ngAfterViewInit() {
    this.autoplay();
  }

}

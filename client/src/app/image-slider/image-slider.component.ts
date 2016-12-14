import { Component, OnInit } from '@angular/core';
import {Image} from "./image";
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  providers: [NgbCarouselConfig]
})
export class ImageSliderComponent implements OnInit {

  public images: Image[];

  constructor(config: NgbCarouselConfig) {
    this.images = [
      new Image("We are covered", "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/covered.jpg"),
      new Image("Generation Gap", "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/generation.jpg"),
      new Image("Potter Me", "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/potter.jpg"),
      new Image("Pre-School Kids", "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/preschool.jpg"),
      new Image("Young Peter Cech", "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/soccer.jpg")

    ];
    config.interval = 10000;
  }

  ngOnInit() {
  }

}

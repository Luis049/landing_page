import { Component, Input, OnInit } from '@angular/core';
import { CarouselItem } from '../../../data/interfaces/carousel-interfaces';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {


  @Input() images: CarouselItem[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;

  selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages()
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onRightClick();
    }, this.slideInterval);
  }

  selectedImagen(index: number): void {
    this.selectedIndex = index;
  }

  onLeftClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
  onRightClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}

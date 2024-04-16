import { CdkStepper } from '@angular/cdk/stepper';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  providers: [{ provide: CdkStepper, useExisting: CarouselComponent  }]
})
export class CarouselComponent extends CdkStepper{

// @Input() header: string | undefined;

}

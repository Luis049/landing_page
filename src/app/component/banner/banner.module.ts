import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  exports: [BannerComponent],
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BannerModule { }

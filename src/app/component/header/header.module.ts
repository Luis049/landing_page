import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
@NgModule({
  imports: [
    HeaderComponent
  ],
  providers: [
  ],
  exports: [
    RouterModule
  ]
})
export class HeaderModule { }

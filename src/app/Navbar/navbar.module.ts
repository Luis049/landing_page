import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LinkComponent } from './components/link/link.component';



@NgModule({
  exports: [ NavbarComponent ],
  declarations: [NavbarComponent, LinkComponent],
  imports: [
    CommonModule,
  ]
})
export class NavbarModule { }

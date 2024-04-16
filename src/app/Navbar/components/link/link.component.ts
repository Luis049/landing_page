import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  template: `
    <a [ngClass]="{'text-primary-500': selectedPage === lowerCasePage, 'hover:text-primary-300': selectedPage !== lowerCasePage}"
       (click)="setSelectedPage(lowerCasePage)">
      {{ page }}
    </a>
  `,
  styleUrl: './link.component.scss'
})
export class LinkComponent {

  @Input() page!: string;
  @Input() selectedPage!: string;
  @Input() setSelectedPage!: (value: string) => void;

  get lowerCasePage(): string {
    return this.page.toLowerCase().replace(/ /g, '');
  }

}

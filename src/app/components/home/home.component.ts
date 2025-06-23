import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent],
  template: `
   <app-navbar/>
   <app-header/>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

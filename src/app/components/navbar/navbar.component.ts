import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FooterComponent, RouterOutlet],
  template: `
    <p>
      navbar works!
    </p>

    <router-outlet/>

    <app-footer/>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}

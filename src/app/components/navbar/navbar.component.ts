import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FooterComponent, RouterOutlet, RouterLink],
  template: `
    <nav>
      <div class="nav__header">
        <div class="nav__logo">
          <a href="#">Solution<span>A</span></a>
        </div>
        <div class="nav__menu__btn" id="menu-btn">
          <i class="ri-menu-line"></i>
        </div>
      </div>
      <ul class="nav__links" id="nav-links">
        <li><a [routerLink] = "['/home']" >Home</a></li>
        <li><a [routerLink] = "['/home/about-us']" >About Us</a></li>
        <li><a [routerLink] = "['/home/feedback']" >Client</a></li>
        <li><a [routerLink] = "['/home/reach-us']" >Contact</a></li>
        <li><a [routerLink] = "['/home/portfolio']" >Portfolio</a></li>
      </ul>
      <div class="nav__btns">
        <button class="btn">Let's Talk</button>
      </div>
    </nav>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}

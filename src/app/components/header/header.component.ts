import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="section__container header__container" id="home">
      <div class="header__image">
        <img src="assets/header.png" alt="header" />
      </div>
      <div class="header__content">
        <h1>Building <span>Digital Product,</span> Brand and Experience</h1>
        <p class="section__description">
          We help businesses grow by creating innovative digital products,
          memorable brand identities, and seamless user experiences that truly
          connect with their audience
        </p>
        <div class="header__btns">
          <button class="btn">How It Works</button>
          <a href="#">
            <span><i class="ri-play-fill"></i></span>
            Check Video
          </a>
        </div>
      </div>
    </header>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}

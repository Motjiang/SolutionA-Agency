import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section class="section__container about__container" id="about">
      <div class="about__image">
        <img src="assets/about.png" alt="about" />
      </div>
      <div class="about__content">
        <h2 class="section__header">
          We Create Ideas & Policies for Your Company Future
        </h2>
        <ul class="about__list">
          <li>
            <span><i class="ri-focus-2-line"></i></span>
            <div>
              <h4>Company Mission</h4>
              <p class="section__description">
                We aim to empower brands with innovative solutions that drive
                growth, impact, and long-term success.
              </p>
            </div>
          </li>
          <li>
            <span><i class="ri-slideshow-line"></i></span>
            <div>
              <h4>Company Vision</h4>
              <p class="section__description">
                To be a trusted digital partner shaping the future of businesses
                through creativity and technology.
              </p>
            </div>
          </li>
          <li>
            <span><i class="ri-search-eye-line"></i></span>
            <div>
              <h4>Our Philosophy</h4>
              <p class="section__description">
                We believe in collaboration, transparency, and bold thinking to
                deliver meaningful results for every client.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  `,
  styleUrl: './about.component.css',
})
export class AboutComponent {}

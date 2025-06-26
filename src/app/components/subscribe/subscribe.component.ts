import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [],
  template: `
    <section class="section__container subscribe__container" id="contact">
      <div class="subscribe__content">
        <h2 class="section__header">
          Subscribe Newsletter Get Latest Updates and Dates
        </h2>
        <form action="/">
          <input type="text" placeholder="Enter your email here..." />
          <button class="btn">
            Subscribe
            <span><i class="ri-arrow-right-long-line"></i></span>
          </button>
        </form>
      </div>
    </section>
  `,
  styleUrl: './subscribe.component.css',
})
export class SubscribeComponent {}

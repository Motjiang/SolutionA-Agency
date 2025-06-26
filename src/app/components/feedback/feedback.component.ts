import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  template: `
    <section class="section__container feedback__container" id="client">
      <h2 class="section__header">Happy Customer Feedback</h2>
      <!-- Slider main container -->
      <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <div class="feedback__card">
              <p class="section__description">
                Working with SolutionA was a game-changer for our online
                presence. Their creativity and attention to detail exceeded our
                expectations.
              </p>
              <div class="feedback__details">
                <div class="feedback__user">
                  <img src="assets/feedback-1.jpg" alt="feedback" />
                  <div>
                    <h4>James Carter</h4>
                    <h5>CEO, TechNova Solutions</h5>
                  </div>
                </div>
                <div class="feedback__rating">
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="feedback__card">
              <p class="section__description">
                The team at SolutionA truly understands how to turn ideas into
                impactful digital experiences. Highly professional and reliable.
              </p>
              <div class="feedback__details">
                <div class="feedback__user">
                  <img src="assets/feedback-2.jpg" alt="feedback" />
                  <div>
                    <h4>Sarah Mitchell</h4>
                    <h5>Marketing Director, Green Organics</h5>
                  </div>
                </div>
                <div class="feedback__rating">
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="feedback__card">
              <p class="section__description">
                From design to delivery, their process was seamless. Our new
                website looks stunning and performs better than ever in all
                aspects.
              </p>
              <div class="feedback__details">
                <div class="feedback__user">
                  <img src="assets/feedback-3.jpg" alt="feedback" />
                  <div>
                    <h4>Anita Roy</h4>
                    <h5>Founder, Roy Interiors</h5>
                  </div>
                </div>
                <div class="feedback__rating">
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="feedback__card">
              <p class="section__description">
                SolutionA helped us reimagine our brand identity with fresh
                visuals and an effective marketing strategy. We loved the
                collaboration!
              </p>
              <div class="feedback__details">
                <div class="feedback__user">
                  <img src="assets/feedback-4.jpg" alt="feedback" />
                  <div>
                    <h4>David Kim</h4>
                    <h5>Brand Manager, Urban Pulse</h5>
                  </div>
                </div>
                <div class="feedback__rating">
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './feedback.component.css',
})
export class FeedbackComponent {}

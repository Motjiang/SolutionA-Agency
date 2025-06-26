import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  template: `
    <section class="portfolio" id="portfolio">
      <div class="section__container portfolio__container">
        <div class="portfolio__header">
          <h2 class="section__header">
            Experience & Innovate Solutions for Creative Design & Development
            Agency
          </h2>
          <p class="section__description">
            At SolutionsA, we blend years of industry experience with
            forward-thinking innovation to craft tailored design and development
            solutions. Our creative approach ensures every project stands
            out—whether it's building powerful digital products or developing
            scalable web experiences.
          </p>
        </div>
        <div class="portfolio__content">
          <div class="portfolio__image">
            <div class="portfolio__image__content">
              <div>
                <h4>8</h4>
                <p>Years<br />Experience</p>
              </div>
              <div>
                <h4>120</h4>
                <p>Types of<br />Courses</p>
              </div>
            </div>
            <img src="assets/portfolio.jpg" alt="portfolio" />
          </div>
          <ul class="portfolio__list">
            <li>
              <span>01</span>
              <div>
                <h4>Marketing Strategy</h4>
                <p class="section__description">
                  We develop targeted marketing strategies that boost brand
                  visibility and drive business growth.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h4>Project Management</h4>
                <p class="section__description">
                  Our expert project managers ensure every project runs smoothly
                  and delivers results on time.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h4>Consultant Specialist</h4>
                <p class="section__description">
                  Our consultants provide expert insights and tailored guidance
                  to help your business make smart decisions.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {}

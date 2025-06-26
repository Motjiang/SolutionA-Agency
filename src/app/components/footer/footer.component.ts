import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <div class="section__container footer__container">
        <div class="footer__col">
          <div class="footer__logo">
            <a href="#">Solution<span>A</span></a>
          </div>
          <p class="section__description">
            SolutionA is a creative digital agency dedicated to delivering
            innovative solutions.
          </p>
          <h3>Follow Us</h3>
          <ul class="footer__socials">
            <li>
              <a href="#"><i class="ri-facebook-fill"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-twitter-fill"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-instagram-line"></i></a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Quick Links</h4>
          <ul class="footer__links">
            <li><a href="#">About Agency</a></li>
            <li><a href="#">Latest News & Blogs</a></li>
            <li><a href="#">Terms of Users</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Need a Career?</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Support</h4>
          <ul class="footer__links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Report an Issue</a></li>
            <li><a href="#">Get a Quote</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Contact Us</h4>
          <ul class="footer__links">
            <li>
              <a href="#">
                <span><i class="ri-phone-fill"></i></span> +91 0987654321
              </a>
            </li>
            <li>
              <a href="#">
                <span><i class="ri-mail-fill"></i></span> info&#64;solutiona.com
              </a>
            </li>
            <li>
              <a href="#">
                <span><i class="ri-map-pin-2-fill"></i></span> 1234 Marine
                Drive, PE
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © 2025 SolutionA. All rights reserved.
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {}

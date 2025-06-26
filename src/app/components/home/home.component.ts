import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';
import { ServiceComponent } from '../service/service.component';
import { AboutComponent } from '../about/about.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent,
    ServiceComponent,
    AboutComponent,
    PortfolioComponent,
    FeedbackComponent,
    SubscribeComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <app-header />
    <app-service />
    <app-about />
    <app-portfolio />
    <app-feedback />
    <app-subscribe />
    <app-footer />
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}

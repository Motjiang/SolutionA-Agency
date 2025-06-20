import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ServiceComponent } from './components/service/service.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: NavbarComponent,
    children: [
      {
        path: '',
        redirectTo: 'header',
        pathMatch: 'full',
      },
      {
        path: 'header',
        component: HeaderComponent,
      },
      {
        path:'service',
        component:ServiceComponent
      },
      {
        path:'about-us',
        component:AboutComponent
      },
      {
        path:'portfolio',
        component:PortfolioComponent
      },
      {
        path:'feedback',
        component:FeedbackComponent
      },
      {
        path:'reach-us',
        component:SubscribeComponent
      }
    ],
  },
  {
    path:'**', redirectTo:'home', pathMatch:'full'
  }
];

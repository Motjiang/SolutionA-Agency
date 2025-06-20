import { Component } from '@angular/core';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { ServiceOffered } from '../service-card/model/service-offered';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule],
  template: `
    <section class="service">
      <div class="section__container service__container">
        <h2 class="section__header">
          We are Strategic Creative Digital Agency Service
        </h2>
        <app-service-card *ngFor="let serviceOffered of serviceOfferedList" [serviceOffered]="serviceOffered" />
        <div class="service__btn">
          <button class="btn">All Our Services</button>
        </div>
      </div>
    </section>
  `,
  styleUrl: './service.component.css',
})
export class ServiceComponent {
  serviceOfferedList: ServiceOffered[] = [
    {
      id: 1,
      icon: 'ri-pencil-ruler-2-line',
      title: 'Product Design',
      description:
        'We craft user-friendly digital products that solve real problems and enhance customer satisfaction.',
    },
    {
      id: 2,
      icon: 'ri-computer-line',
      title: 'Digital Marketing',
      description:
        'Our data-driven marketing strategies help you reach the right audience and drive conversions.',
    },
    {
      id: 3,
      icon: 'ri-pages-line',
      title: 'Web Design',
      description:
        " We build responsive and visually appealing websites tailored to reflect your brand's personality.",
    },
    {
      id: 4,
      icon: 'ri-layout-2-line',
      title: 'Creative Layout',
      description:
        ' Our unique layouts ensure your brand stands out and delivers a memorable visual experience',
    },
  ];
}

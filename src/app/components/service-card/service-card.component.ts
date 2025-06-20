import { Component, Input } from '@angular/core';
import { ServiceOffered } from './model/service-offered';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="service__card" [ngClass]="'card-' + cardIndex">
      <div><i [ngClass]="serviceOffered.icon"></i></div>
      <h4>{{ serviceOffered.title }}</h4>
      <p class="section__description">
        {{ serviceOffered.description }}
      </p>
    </div>
  `,
  styleUrl: './service-card.component.css',
})
export class ServiceCardComponent {
  @Input() serviceOffered!: ServiceOffered;
  @Input() cardIndex!: number;
}

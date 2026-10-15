import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profileData } from '../../../data/profile.data';

@Component({
  selector: 'app-availability-badge',
  imports: [RouterLink],
  template: `@if (availability.openToOpportunities) {
    <a class="opportunity-badge" routerLink="/contact">
      <span class="opportunity-dot" aria-hidden="true"></span>{{ availability.label }}
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7V4h8v3M3 7h18v14H3V7Zm0 5c5 4 13 4 18 0M10 13h4v3h-4v-3Z"/></svg>
    </a>
  }`,
  styles: `
    :host { display: inline-flex; max-width: 100%; }
    .opportunity-badge { width: auto; height: auto; display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 8px 12px; border: 1px solid var(--color-border); border-radius: 30px; color: var(--color-success); background: var(--color-surface); font-size: 12px; text-decoration: none; animation: availability-fade 2.8s ease-in-out infinite; }
    .opportunity-dot { flex-shrink: 0; width: 6px; height: 6px; border-radius: 50%; background: currentColor; animation: availability-ring 2.8s ease-in-out infinite; }
    svg { flex-shrink: 0; width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; animation: availability-lift 2.8s ease-in-out infinite; }
    a:hover, a:focus-visible { opacity: 1; animation: none; border-color: currentColor; }
    a:hover svg, a:focus-visible svg { animation: none; }
    a:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 3px; }
    @keyframes availability-fade { 0%, 100% { opacity: 1; } 50% { opacity: .65; } }
    @keyframes availability-ring { 0%, 100% { box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-success) 15%, transparent); } 50% { box-shadow: 0 0 0 7px color-mix(in srgb, var(--color-success) 5%, transparent); } }
    @keyframes availability-lift { 0%, 100% { transform: none; } 50% { transform: translateY(-2px) rotate(-6deg); } }
    @media (prefers-reduced-motion: reduce) { .opportunity-badge, .opportunity-dot, svg { animation: none; } }
  `,
})
export class AvailabilityBadge {
  protected readonly availability = profileData.availability;
}

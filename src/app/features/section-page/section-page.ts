import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { CareerRecord } from '../../data/career.data';

export interface SectionPageContent {
  title: string;
  eyebrow: string;
  summary: string;
  items?: string[];
  groups?: { title: string; skills: string[] }[];
  records?: CareerRecord[];
  contact?: { email: string; phone: string; linkedin: string; github: string };
}

@Component({
  selector: 'app-section-page',
  imports: [RouterLink],
  templateUrl: './section-page.html',
  styleUrl: './section-page.css',
})
export class SectionPage {
  readonly content = input.required<SectionPageContent>();
}

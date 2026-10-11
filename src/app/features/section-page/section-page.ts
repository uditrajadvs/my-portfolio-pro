import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { CareerRecord } from '../../data/common/career-record.model';
import { skillIcons } from '../../data/skills.data';

export interface SectionPageContent {
  title: string;
  eyebrow: string;
  summary: string;
  layout?: 'experience' | 'projects';
  items?: string[];
  groups?: { title: string; skills: string[] }[];
  records?: CareerRecord[];
}

@Component({
  selector: 'app-section-page',
  imports: [RouterLink],
  templateUrl: './section-page.html',
  styleUrls: ['./section-page.css', './career.css'],
})
export class SectionPage {
  readonly content = input.required<SectionPageContent>();
  protected readonly icons = skillIcons;

}

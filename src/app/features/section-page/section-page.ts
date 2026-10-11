import { afterNextRender, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { CareerRecord } from '../../data/common/career-record.model';
import { contactFormAction } from '../../data/common/contact.data';

interface KwesFormsApi {
  init?: () => void;
}

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
  protected readonly contactFormAction = contactFormAction;
  readonly content = input.required<SectionPageContent>();

  constructor() {
    afterNextRender(() => {
      if (!this.content().contact) {
        return;
      }
      const kwes = (window as unknown as { kwesforms?: KwesFormsApi }).kwesforms;
      kwes?.init?.();
    });
  }
}

import { afterNextRender, Component } from '@angular/core';
import { contactData, contactFormAction, contactPageData, socialLinks } from '../../data/common/contact.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly page = contactPageData;
  protected readonly action = contactFormAction;
  protected readonly channels = [
    { label: 'Email', href: socialLinks.email, detail: contactData.email, icon: 'email', external: false },
    { label: 'LinkedIn', href: contactData.linkedin, detail: contactData.linkedin.replace('https://www.', ''), icon: 'linkedin', external: true },
    { label: 'GitHub', href: contactData.github, detail: contactData.github.replace('https://', ''), icon: 'github', external: true },
  ];

  constructor() {
    afterNextRender(() => {
      (window as unknown as { kwesforms?: { init?: () => void } }).kwesforms?.init?.();
    });
  }
}

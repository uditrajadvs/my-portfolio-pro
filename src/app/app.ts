import { Component, signal } from '@angular/core';
import { Layout } from './core/layout/layout';
import { About } from './features/about/about';
import { Home } from './features/home/home';
import { LogoIntro } from './shared/components/logo-intro/logo-intro';

@Component({
  selector: 'app-root',
  imports: [Layout, Home, About, LogoIntro],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly showIntro = signal(true);

  protected finishIntro(): void {
    this.showIntro.set(false);
  }

  protected readonly upcomingSections = [
    { id: 'experience', title: 'Experience', phase: 'Phase 2' },
    { id: 'skills', title: 'Skills', phase: 'Phase 3' },
    { id: 'projects', title: 'Projects', phase: 'Phase 3' },
    { id: 'education', title: 'Education', phase: 'Phase 4' },
    { id: 'certifications', title: 'Certifications', phase: 'Phase 4' },
    { id: 'contact', title: 'Contact', phase: 'Phase 5' },
  ];
}

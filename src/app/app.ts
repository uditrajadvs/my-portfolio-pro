import { Component, signal } from '@angular/core';
import { Layout } from './core/layout/layout';
import { LogoIntro } from './shared/components/logo-intro/logo-intro';

@Component({
  selector: 'app-root',
  imports: [Layout, LogoIntro],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly showIntro = signal(true);
  protected readonly darkMode = signal(false);

  constructor() {
    if (typeof localStorage !== 'undefined') {
      this.darkMode.set(localStorage.getItem('portfolio-theme') === 'dark');
    }
  }

  protected setTheme(isDark: boolean): void {
    this.darkMode.set(isDark);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    }
  }

  protected finishIntro(): void {
    this.showIntro.set(false);
  }
}

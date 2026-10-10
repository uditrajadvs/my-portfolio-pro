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
  protected readonly darkMode = signal(true);

  constructor() {
    const isDark =
      typeof localStorage === 'undefined' || localStorage.getItem('portfolio-theme') !== 'light';
    this.darkMode.set(isDark);
    this.applyDocumentTheme(isDark);
  }

  protected setTheme(isDark: boolean): void {
    this.darkMode.set(isDark);
    this.applyDocumentTheme(isDark);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    }
  }

  private applyDocumentTheme(isDark: boolean): void {
    if (typeof document === 'undefined') {
      return;
    }
    document.documentElement.classList.toggle('theme-dark', isDark);
  }

  protected finishIntro(): void {
    this.showIntro.set(false);
  }
}

import { Component, ElementRef, inject, input, output } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  constructor() {
    inject(Router).events.pipe(takeUntilDestroyed()).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.element.nativeElement.querySelector<HTMLElement>('#main-content')?.focus({ preventScroll: true });
      }
    });
  }
  readonly darkMode = input(false);
  readonly themeToggle = output<boolean>();
}

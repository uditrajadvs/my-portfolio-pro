import { Component, ElementRef, HostListener, inject, input, output, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { profileData } from '../../data/profile.data';
import { navigationData } from '../../data/common/navigation.data';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly profile = profileData;
  readonly darkMode = input(false);
  readonly themeToggle = output<boolean>();
  protected readonly menuOpen = signal(false);
  protected readonly navigation = navigationData;

  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    inject(Router).events.pipe(takeUntilDestroyed()).subscribe(event => {
      if (event instanceof NavigationEnd) this.closeMenu();
    });
  }

  @HostListener('document:keydown.escape')
  protected dismissMenu(): void {
    if (!this.menuOpen()) return;
    this.closeMenu();
    this.element.nativeElement.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();
  }

  @HostListener('document:click', ['$event'])
  protected onOutsideClick(event: MouseEvent): void {
    if (event.target instanceof Node && !this.element.nativeElement.contains(event.target)) this.closeMenu();
  }

  @HostListener('focusout', ['$event'])
  protected onFocusOut(event: FocusEvent): void {
    if (event.relatedTarget instanceof Node && !this.element.nativeElement.contains(event.relatedTarget)) this.closeMenu();
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}

import { Component, HostListener, input, output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
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

  @HostListener('document:keydown.escape')
  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}

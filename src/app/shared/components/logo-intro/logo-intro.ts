import { Component, HostListener, OnDestroy, OnInit, output } from '@angular/core';
import { profileData } from '../../../data/profile.data';

@Component({
  selector: 'app-logo-intro',
  templateUrl: './logo-intro.html',
  styleUrl: './logo-intro.scss',
})
export class LogoIntro implements OnInit, OnDestroy {
  readonly complete = output<void>();
  protected readonly profile = profileData;
  private fallbackTimer?: ReturnType<typeof setTimeout>;
  private finished = false;

  ngOnInit(): void {
    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;
    this.fallbackTimer = setTimeout(() => this.finish(), reducedMotion ? 0 : 1550);
  }

  ngOnDestroy(): void {
    if (this.fallbackTimer) {
      clearTimeout(this.fallbackTimer);
    }
  }

  protected onAnimationEnd(event: AnimationEvent): void {
    if (event.target === event.currentTarget) {
      this.finish();
    }
  }

  @HostListener('document:keydown.escape')
  protected finish(): void {
    if (this.finished) {
      return;
    }
    this.finished = true;
    this.complete.emit();
  }
}

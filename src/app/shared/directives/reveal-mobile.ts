import { afterNextRender, Directive, ElementRef, HostListener, inject, Injector, input } from '@angular/core';

/** Reveal content changed by a control, without moving desktop pages or search inputs. */
@Directive({ selector: '[appRevealMobile]' })
export class RevealMobile {
  readonly appRevealMobile = input.required<HTMLElement>();
  private readonly injector = inject(Injector);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  @HostListener('click')
  protected onClick(): void {
    if (this.host.nativeElement.tagName !== 'DETAILS') this.reveal();
  }

  @HostListener('toggle')
  protected onToggle(): void {
    if ((this.host.nativeElement as HTMLDetailsElement).open) this.reveal();
  }

  private reveal(): void {
    if (!window.matchMedia?.('(max-width: 700px)').matches) return;
    afterNextRender(() => this.appRevealMobile().scrollIntoView({
      block: 'start',
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    }), { injector: this.injector });
  }
}

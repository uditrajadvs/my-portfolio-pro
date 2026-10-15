import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { vi } from 'vitest';
import { appConfig } from './app.config';
import { App } from './app';
import { ApplicationRef } from '@angular/core';
import { documentsData } from './data/common/documents.data';

describe('App', () => {
  beforeEach(async () => {
    localStorage.removeItem('portfolio-theme');
    await TestBed.configureTestingModule({
      imports: [App],
      providers: appConfig.providers,
    })
      .compileComponents();
  });

  it('should start destination pages at the top through CTAs, footer links, and repeat navigation', async () => {
    const scroll = vi.spyOn(TestBed.inject(ViewportScroller), 'scrollToPosition').mockImplementation(() => {});
    const application = TestBed.inject(ApplicationRef);
    const host = document.createElement('app-root');
    document.body.appendChild(host);
    const component = application.bootstrap(App, host);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/overview');
    await application.whenStable();
    application.tick();
    const page = component.location.nativeElement as HTMLElement;
    const main = page.querySelector<HTMLElement>('#main-content')!;
    const focus = vi.spyOn(main, 'focus');
    scroll.mockClear();
    page.querySelector<HTMLAnchorElement>('.home-actions a[href="/contact"]')!.click();
    await application.whenStable();
    application.tick();
    await vi.waitFor(() => expect(scroll).toHaveBeenCalledWith([0, 0]));
    expect(router.url).toBe('/contact');
    expect(focus).toHaveBeenCalledWith({ preventScroll: true });
    scroll.mockClear();
    page.querySelector<HTMLAnchorElement>('.footer-links a[href="/contact"]')!.click();
    await application.whenStable();
    await vi.waitFor(() => expect(scroll).toHaveBeenCalledWith([0, 0]));
    scroll.mockClear();
    page.querySelector<HTMLAnchorElement>('.footer-links a[href="/about"]')!.click();
    await application.whenStable();
    await vi.waitFor(() => expect(scroll).toHaveBeenCalledWith([0, 0]));
    expect(router.url).toBe('/about');
    scroll.mockRestore();
    component.destroy();
    host.remove();
  });

  it('should dismiss mobile navigation with Escape, outside clicks, focus exit, and navigation', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/overview');
    await fixture.whenStable();
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    page.querySelector<HTMLButtonElement>('.intro-skip')?.click();
    fixture.detectChanges();
    const menu = page.querySelector<HTMLButtonElement>('.menu-toggle')!;
    const open = () => { menu.click(); fixture.detectChanges(); expect(menu.getAttribute('aria-expanded')).toBe('true'); };
    open();
    const focus = vi.spyOn(menu, 'focus');
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();
    expect(menu.getAttribute('aria-expanded')).toBe('false');
    expect(focus).toHaveBeenCalled();
    open();
    page.querySelector('main')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();
    expect(menu.getAttribute('aria-expanded')).toBe('false');
    open();
    menu.dispatchEvent(new FocusEvent('focusout', { bubbles: true, relatedTarget: page.querySelector('main') }));
    fixture.detectChanges();
    expect(menu.getAttribute('aria-expanded')).toBe('false');
    open();
    page.querySelector<HTMLAnchorElement>('#primary-navigation a[href="/projects"]')!.click();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(router.url).toBe('/projects');
    expect(menu.getAttribute('aria-expanded')).toBe('false');
    expect(page.querySelector('#primary-navigation a[aria-current="page"]')?.textContent).toContain('Projects');
    expect(page.querySelectorAll('#primary-navigation > a').length).toBe(9);
  });

  it('should reveal selected project content and skill results on mobile only', async () => {
    let mobile = true;
    vi.stubGlobal('matchMedia', (query: string) => ({ matches: query.includes('max-width') ? mobile : true }));
    try {
      const fixture = TestBed.createComponent(App);
      const router = TestBed.inject(Router);
      await router.navigateByUrl('/overview');
      await fixture.whenStable();
      fixture.detectChanges();
      const page = fixture.nativeElement as HTMLElement;
      const preview = page.querySelector<HTMLElement>('#home-project-preview')!;
      const reveal = vi.fn();
      preview.scrollIntoView = reveal;
      // The first project is already selected; tapping it must still reveal its content.
      page.querySelector<HTMLButtonElement>('.home-work-picker button')!.click();
      await fixture.whenStable();
      expect(reveal).toHaveBeenCalledWith({ block: 'start', behavior: 'instant' });
      reveal.mockClear();
      mobile = false;
      page.querySelectorAll<HTMLButtonElement>('.home-work-picker button')[1].click();
      await fixture.whenStable();
      expect(reveal).not.toHaveBeenCalled();
      mobile = true;
      await router.navigateByUrl('/skills');
      await fixture.whenStable();
      fixture.detectChanges();
      const results = page.querySelector<HTMLElement>('.skills-results')!;
      results.scrollIntoView = reveal;
      page.querySelectorAll<HTMLButtonElement>('.category-filters button')[1].click();
      await fixture.whenStable();
      expect(reveal).toHaveBeenCalledWith({ block: 'start', behavior: 'instant' });
    } finally {
      vi.unstubAllGlobals();
    }
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should let visitors skip the intro and unlock the page', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('app-layout')?.hasAttribute('inert')).toBe(true);
    page.querySelector<HTMLButtonElement>('.intro-skip')!.click();
    fixture.detectChanges();
    expect(page.querySelector('app-logo-intro')).toBeNull();
    expect(page.querySelector('app-layout')?.hasAttribute('inert')).toBe(false);
  });

  it('should render the Overview dashboard', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/overview');
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#overview-title')?.textContent).toContain('Udit Raj');
    expect(compiled.querySelector('#overview-title')?.textContent).toContain('Java Backend Developer');
    expect(compiled.querySelector('.home-actions a[ href="/resume"]')).toBeTruthy();
    expect(compiled.querySelectorAll('.home-explore a').length).toBe(4);
    expect(compiled.querySelector('#home-project-preview')?.textContent).toContain('Wealth360');
    const projectButtons = compiled.querySelectorAll<HTMLButtonElement>('.home-work-picker button');
    projectButtons[1].click();
    fixture.detectChanges();
    expect(projectButtons[1].getAttribute('aria-pressed')).toBe('true');
    expect(projectButtons[0].getAttribute('aria-pressed')).toBe('false');
    expect(compiled.querySelector('.home-project-content.is-active')?.textContent).toContain('Ride Sharing Application');
    const panels = compiled.querySelectorAll<HTMLElement>('.home-project-content');
    expect(panels.length).toBe(projectButtons.length);
    expect(panels[0].hasAttribute('inert')).toBe(true);
    expect(panels[1].hasAttribute('inert')).toBe(false);
    expect(panels[0].getAttribute('aria-hidden')).toBe('true');
    const selectedPanel = panels[1];
    projectButtons[1].click();
    fixture.detectChanges();
    expect(compiled.querySelector('.home-project-content.is-active')).toBe(selectedPanel);
    expect(compiled.querySelector('.header-socials, .hero-socials')).toBeNull();
    expect(compiled.querySelector('.footer-socials a[aria-label="LinkedIn profile"]')?.getAttribute('href')).toBe('https://www.linkedin.com/in/raj-udit');
    expect(compiled.querySelector('.footer-socials a[aria-label="GitHub profile"]')?.getAttribute('href')).toBe('https://github.com/uditrajadvs');
    expect(compiled.querySelector('.footer-socials a[aria-label="Gmail Udit Raj"]')?.getAttribute('href')).toBe('mailto:uditraj.se@gmail.com');
  });

  it('should use the same contact availability action on Overview and About Me', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    for (const route of ['/overview', '/about']) {
      await router.navigateByUrl(route);
      await fixture.whenStable();
      fixture.detectChanges();
      const page = fixture.nativeElement as HTMLElement;
      const badge = page.querySelector<HTMLAnchorElement>('app-availability-badge a')!;
      expect(badge.getAttribute('href')).toBe('/contact');
      expect(badge.textContent).toContain('Open to opportunities');
      expect(badge.querySelector('svg')).toBeTruthy();
      badge.click();
      await fixture.whenStable();
      expect(router.url).toBe('/contact');
    }
  });

  it('should toggle the page theme from the header control', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();

    const darkButton = fixture.nativeElement.querySelector('[aria-label="Dark mode"]') as HTMLButtonElement;
    const lightButton = fixture.nativeElement.querySelector('[aria-label="Light mode"]') as HTMLButtonElement;

    expect(fixture.nativeElement.querySelector('app-layout')?.classList.contains('theme-dark')).toBe(true);
    expect(darkButton.getAttribute('aria-pressed')).toBe('true');
    expect(lightButton.getAttribute('aria-pressed')).toBe('false');

    lightButton.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-layout')?.classList.contains('theme-dark')).toBe(false);
    expect(darkButton.getAttribute('aria-pressed')).toBe('false');
    expect(lightButton.getAttribute('aria-pressed')).toBe('true');

    darkButton.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-layout')?.classList.contains('theme-dark')).toBe(true);
    expect(fixture.nativeElement.querySelector('[aria-label="Dark mode"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[aria-label="Light mode"]')).toBeTruthy();
  });

  it('should render a Kwesforms contact form on the contact page', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/contact');
    await fixture.whenStable();
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector('form.kf-form') as HTMLFormElement;
    expect(form).toBeTruthy();
    expect(form.getAttribute('method')?.toLowerCase()).toBe('post');
    expect(form.getAttribute('action')).toBe('https://kwesforms.com/api/f/rHLhEpyDurp3vFt3Galy');
    expect(form.querySelector('input[name="name"]')).toBeTruthy();
    expect(form.querySelector('input[name="email"]')).toBeTruthy();
    expect(form.querySelector('select[name="subject"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('#contact-title')?.textContent).toBe("Let's Connect");
    expect(fixture.nativeElement.querySelector('.contact-resume')).toBeNull();
    expect(form.querySelector('textarea[name="message"]')).toBeTruthy();
    expect(form.querySelector('button[type="submit"]')?.textContent).toContain('Send Message');
  });

  it('should navigate to other sections without leaving the SPA', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/education');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#page-title')?.textContent).toContain('Education');
    expect(compiled.querySelectorAll('.education-record').length).toBe(3);
    expect(compiled.querySelector('.education-timeline')?.textContent).toContain('73.2%');
    expect(compiled.querySelector('.education-timeline')?.textContent).toContain('8.2/10 CGPA');
    expect(compiled.querySelector('.coursework')?.textContent).toContain('Computer Networks');
    const topThought = compiled.querySelector('.heading-thought p')?.textContent?.trim();
    const bottomThought = compiled.querySelector('.education-thought p')?.textContent?.trim();
    expect(topThought).toContain('Education is not just about degrees');
    expect(compiled.querySelector('.heading-thought cite')).toBeNull();
    expect(bottomThought).toContain('Education gave me the knowledge');
    expect(compiled.querySelector('.education-heading-art img')?.getAttribute('src')).toBe('/images/education-books.svg');
    expect(compiled.querySelector('.site-header')).toBeTruthy();

    await router.navigateByUrl('/projects');
    fixture.detectChanges();
    expect(compiled.querySelector('#page-title')?.textContent).toContain('Projects');
    expect(compiled.querySelectorAll('.work-record').length).toBe(3);
    const architecture = compiled.querySelector<HTMLDetailsElement>('.project-knowledge')!;
    expect(architecture.open).toBe(false);
    architecture.querySelector('summary')!.click();
    expect(architecture.open).toBe(true);
    expect(architecture.textContent).toContain('MyBatis');
    await router.navigateByUrl('/experience');
    fixture.detectChanges();
    expect(compiled.querySelectorAll('.work-timeline .work-record').length).toBe(2);
    expect(compiled.querySelector('.work-timeline')?.textContent).toContain('June 2023');
  });

  it('should render the About Me profile dashboard', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/about');
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#about-title')?.textContent).toContain('About Me');
    expect(compiled.querySelector('.about-photo')?.getAttribute('src')).toContain('ud-photo.jpeg');
    expect(compiled.querySelector('#summary-title')?.textContent).toContain('Professional summary');
    expect(compiled.querySelector('.profile-title')?.textContent).toBe('Java Backend Developer');
    expect(compiled.querySelector('.profile-facts')?.textContent).toContain('Software Engineer');
    expect(compiled.querySelector('.cgi-focus-card, .backend-knowledge-card')).toBeNull();
    expect(compiled.querySelector('#personal-details-title')?.textContent).toContain('Professional details');
    expect(compiled.querySelector('.about-photo')?.getAttribute('height')).toBe('1124');
    expect(compiled.querySelector('.profile-quote')?.textContent).toContain('I believe in learning');
    await router.navigateByUrl('/projects');
    await fixture.whenStable();
    fixture.detectChanges();
    expect(compiled.querySelector('.project-knowledge')?.textContent).toContain('MyBatis');
  });

  it('should use the shared original documents for resume and certificate actions', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/resume');
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.resume-preview')?.getAttribute('src')).toBe(documentsData.resume.previewHref);
    expect(compiled.querySelector('.resume-download')?.getAttribute('href')).toBe(documentsData.resume.downloadHref);
    expect(compiled.querySelector('.resume-open')?.getAttribute('href')).toBe(documentsData.resume.viewHref);
    expect(compiled.textContent).not.toContain('PROFESSIONAL PROFILE');

    await router.navigateByUrl('/certifications');
    await fixture.whenStable();
    fixture.detectChanges();
    const certificateLinks = compiled.querySelectorAll('.document-actions a');
    expect(certificateLinks[0]?.getAttribute('href')).toBe(documentsData.javaCertification.viewHref);
    expect(certificateLinks[1]?.getAttribute('href')).toBe(documentsData.javaCertification.downloadHref);
  });

  it('should filter skills and recover from an empty search', async () => {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl('/skills');
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const originalCount = compiled.querySelectorAll('.skill-category').length;
    const databases = Array.from(compiled.querySelectorAll<HTMLButtonElement>('.category-filters button')).find(button => button.textContent?.trim() === 'Databases')!;
    databases.click();
    fixture.detectChanges();
    expect(databases.getAttribute('aria-pressed')).toBe('true');
    expect(compiled.querySelectorAll('.skill-category').length).toBe(1);
    expect(compiled.querySelector('.skills-grid')?.textContent).toContain('MySQL');
    expect(compiled.querySelector('.skills-grid')?.textContent).not.toContain('Spring Boot');
    const search = compiled.querySelector<HTMLInputElement>('input[type="search"]')!;
    search.value = 'no-such-skill';
    search.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(compiled.querySelector('.skills-empty')).toBeTruthy();
    compiled.querySelector<HTMLButtonElement>('.skills-empty button')!.click();
    fixture.detectChanges();
    expect(search.value).toBe('');
    expect(compiled.querySelectorAll('.skill-category').length).toBe(originalCount);
  });
});

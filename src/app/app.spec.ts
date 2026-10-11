import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, withComponentInputBinding } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { documentsData } from './data/common/documents.data';

describe('App', () => {
  beforeEach(async () => {
    localStorage.removeItem('portfolio-theme');
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes, withComponentInputBinding())],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
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
    expect(compiled.querySelector('#home-project-preview')?.textContent).toContain('Ride Sharing Application');
    expect(compiled.querySelector('.header-socials, .hero-socials')).toBeNull();
    expect(compiled.querySelector('.footer-socials a[aria-label="LinkedIn profile"]')?.getAttribute('href')).toBe('https://www.linkedin.com/in/raj-udit');
    expect(compiled.querySelector('.footer-socials a[aria-label="GitHub profile"]')?.getAttribute('href')).toBe('https://github.com/uditrajadvs');
    expect(compiled.querySelector('.footer-socials a[aria-label="Gmail Udit Raj"]')?.getAttribute('href')).toBe('mailto:uditraj.se@gmail.com');
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

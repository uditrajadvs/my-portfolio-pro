import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { documentsData } from '../../data/common/documents.data';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {
  protected readonly document = documentsData.resume;
  // Trust only the application-owned Drive URL, never visitor input.
  protected readonly previewUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(this.document.previewHref);
}

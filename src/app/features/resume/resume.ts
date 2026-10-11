import { Component } from '@angular/core';
import { profileData } from '../../data/profile.data';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {
  protected readonly downloadHref = profileData.resumeHref;
}

import { Component } from '@angular/core';
import { profileData } from '../../data/profile.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly profile = profileData;
}

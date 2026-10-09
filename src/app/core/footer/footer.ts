import { Component } from '@angular/core';
import { profileData } from '../../data/profile.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly profile = profileData;
  protected readonly year = new Date().getFullYear();
}

import { Component } from '@angular/core';
import { profileData } from '../../data/profile.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly profile = profileData;
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profileData } from '../../data/profile.data';
import { backendStrengths, overviewCards, professionalWork } from '../../data/overview.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly profile = profileData;
  protected readonly cards = overviewCards;
  protected readonly strengths = backendStrengths;
  protected readonly work = professionalWork;
  protected readonly previewSkills = ['Java', 'Spring Boot', 'REST APIs', 'Microservices'];
}

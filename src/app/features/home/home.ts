import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profileData } from '../../data/profile.data';
import { overviewCards } from '../../data/overview.data';
import { projectData } from '../../data/projects.data';
import { skillIcons } from '../../data/skills.data';
@Component({ selector: 'app-home', imports: [RouterLink], templateUrl: './home.html', styleUrl: './home.css' })
export class Home {
  protected readonly profile = profileData;
  protected readonly cards = overviewCards;
  protected readonly icons = skillIcons;
  protected readonly projects = projectData;
  protected readonly projectSymbols = [
    'M3 3h18v7H3V3Zm0 11h18v7H3v-7ZM7 6h.01M7 17h.01M11 6h6M11 17h6',
    'm5 6-3 7v6h3v-3h14v3h3v-6l-3-7H5Zm-3 7h20M6 13h.01M18 13h.01M7 6V4h10v2',
    'M8 7V4h8v3M3 7h18v14H3V7Zm0 5c5 4 13 4 18 0M10 13h4v3h-4v-3Z',
  ];
  protected readonly selectedIndex = signal(0);
  protected readonly selectedProject = computed(() => this.projects[this.selectedIndex()]);
}

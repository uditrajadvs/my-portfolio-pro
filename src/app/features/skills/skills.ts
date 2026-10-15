import { RevealMobile } from '../../shared/directives/reveal-mobile';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { previewSkills, skillsData, skillIcons, skillIconPaths, categoryIconPaths, coreStrengths } from '../../data/skills.data';

@Component({ selector: 'app-skills', imports: [RouterLink, RevealMobile], templateUrl: './skills.html', styleUrl: './skills.css' })
export class Skills {
  protected readonly categories = skillsData;
  protected readonly focus = previewSkills;
  protected readonly icons = skillIcons;
  protected readonly symbolIcons = skillIconPaths;
  protected readonly categoryIcons = categoryIconPaths;
  protected readonly strengths = coreStrengths;
  protected readonly query = signal('');
  protected readonly category = signal('All');
  protected readonly total = skillsData.reduce((sum, group) => sum + group.skills.length, 0);
  protected readonly filtered = computed(() => {
    const query = this.query().trim().toLowerCase();
    return skillsData
      .filter(group => this.category() === 'All' || group.title === this.category())
      .map(group => ({ ...group, skills: group.skills.filter(skill => !query || skill.toLowerCase().includes(query) || group.title.toLowerCase().includes(query)) }))
      .filter(group => group.skills.length);
  });
  protected readonly count = computed(() => this.filtered().reduce((sum, group) => sum + group.skills.length, 0));
  protected search(event: Event): void { this.query.set((event.target as HTMLInputElement).value); }
  protected reset(): void { this.query.set(''); this.category.set('All'); }
}

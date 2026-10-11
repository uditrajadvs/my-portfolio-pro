import { Component } from '@angular/core';
import { educationData, educationHighlights, educationThought, educationHeadingThought } from '../../data/education.data';
import { profileData } from '../../data/profile.data';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  protected readonly records = educationData;
  protected readonly highlights = educationHighlights;
  protected readonly coursework = educationData[0].subjects;
  protected readonly thought = educationThought;
  protected readonly headingThought = educationHeadingThought;
  protected readonly name = profileData.name;
}

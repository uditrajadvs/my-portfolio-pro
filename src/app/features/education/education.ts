import { Component } from '@angular/core';
import { educationData, educationHighlights } from '../../data/education.data';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  protected readonly records = educationData;
  protected readonly highlights = educationHighlights;
  protected readonly coursework = educationData[0].subjects;
}

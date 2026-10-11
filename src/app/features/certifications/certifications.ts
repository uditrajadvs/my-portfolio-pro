import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { certificationData } from '../../data/certifications.data';
@Component({ selector: 'app-certifications', imports: [RouterLink], templateUrl: './certifications.html', styleUrl: './certifications.css' })
export class Certifications {
  protected readonly certificates = certificationData;
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profileData } from '../../data/profile.data';
import { contactData } from '../../data/common/contact.data';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly profile = profileData;
  protected readonly contact = contactData;
}

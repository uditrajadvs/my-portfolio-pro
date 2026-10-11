import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profileData } from '../../data/profile.data';
import { navigationData } from '../../data/common/navigation.data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly profile = profileData;
  protected readonly navigation = navigationData;
  protected readonly year = new Date().getFullYear();
}

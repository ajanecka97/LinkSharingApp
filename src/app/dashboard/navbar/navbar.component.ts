import { Component } from '@angular/core';
import { ToggleButtonOption } from 'src/app/shared/toggle-buttons/toggle-buttons.component';
import { ToggleButtonsComponent } from '../../shared/toggle-buttons/toggle-buttons.component';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [ToggleButtonsComponent],
})
export class NavbarComponent {
  public readonly toggleButtonOptions: ToggleButtonOption[] = [
    {
      id: 'links-toggle-button',
      label: 'Links',
      icon: '/assets/images/icon-link.svg',
    },
    {
      id: 'profile-details-toggle-button',
      label: 'Profile Details',
      icon: '/assets/images/icon-profile-details-header.svg',
    },
  ];
}

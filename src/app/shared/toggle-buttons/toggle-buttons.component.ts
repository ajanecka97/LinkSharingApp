import { Component, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { NgFor } from '@angular/common';

export interface ToggleButtonOption {
  id: string;
  label: string;
  icon: string;
}

@Component({
    selector: 'app-toggle-buttons',
    templateUrl: './toggle-buttons.component.html',
    styleUrls: ['./toggle-buttons.component.scss'],
    standalone: true,
    imports: [NgFor, SvgIconComponent],
})
export class ToggleButtonsComponent {
  @Input() options: ToggleButtonOption[] = [];
}

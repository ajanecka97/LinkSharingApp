import { Component, Input } from '@angular/core';

export interface ToggleButtonOption {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-toggle-buttons',
  templateUrl: './toggle-buttons.component.html',
  styleUrls: ['./toggle-buttons.component.scss'],
})
export class ToggleButtonsComponent {
  @Input() options: ToggleButtonOption[] = [];
}

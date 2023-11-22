import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectOption } from './select.model';
import { SvgIconComponent } from 'angular-svg-icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CommonModule,
    SvgIconComponent,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent<T> {
  @Input() public inputId!: string;
  @Input() public options!: SelectOption<T>[];
  @Input() public label!: string;

  constructor() {}
}

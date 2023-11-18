import { Component, Input, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LinkForm, Platform } from '../links-form.model';
import { InputComponent } from 'src/app/shared/input/input.component';
import { SelectComponent } from 'src/app/shared/select/select.component';
import { SelectOption } from 'src/app/shared/select/select.model';

@Component({
  selector: 'app-links-form-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent, SelectComponent],
  templateUrl: './links-form-item.component.html',
  styleUrls: ['./links-form-item.component.scss'],
})
export class LinksFormItemComponent {
  @Input() public form!: FormGroup<LinkForm>;
  @Input() public orderNumber = 1;

  public readonly selectOptions: SelectOption<Platform>[] = [
    {
      label: 'GitHub',
      icon: '/assets/images/icon-github.svg',
      value: Platform.github,
    },
    {
      label: 'YouTube',
      icon: '/assets/images/icon-youtube.svg',
      value: Platform.youtube,
    },
  ];
}

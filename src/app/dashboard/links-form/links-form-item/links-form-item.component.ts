import { Component, Input, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LinkForm } from '../links-form.model';
import { InputComponent } from 'src/app/shared/input/input.component';

@Component({
  selector: 'app-links-form-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  templateUrl: './links-form-item.component.html',
  styleUrls: ['./links-form-item.component.scss'],
})
export class LinksFormItemComponent {
  @Input() public form!: FormGroup<LinkForm>;
  @Input() public orderNumber = 1;
}

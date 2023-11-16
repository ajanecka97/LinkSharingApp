import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { LinkForm, Platform } from './links-form.model';
import { CommonModule } from '@angular/common';
import { LinksFormItemComponent } from './links-form-item/links-form-item.component';

@Component({
  selector: 'app-links-form',
  templateUrl: './links-form.component.html',
  styleUrls: ['./links-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, LinksFormItemComponent],
})
export class LinksFormComponent {
  public linkForms: FormArray<FormGroup<LinkForm>>;

  constructor(private formBuilder: FormBuilder) {
    this.linkForms = this.formBuilder.array<FormGroup<LinkForm>>([]);
  }

  public addNewLink(event: MouseEvent) {
    event.preventDefault();

    const formGroup = this.formBuilder.group<LinkForm>({
      platform: this.formBuilder.control(Platform.github),
      link: this.formBuilder.control(''),
    });

    this.linkForms.push(formGroup);
  }
}

import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SelectOption } from './select.model';
import { SvgIconComponent } from 'angular-svg-icon';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent<T> {
  @Input() public inputId!: string;
  @Input() public options!: SelectOption<T>[];
  @Input() public label!: string;

  @Output() public selectedOptionChanged = new EventEmitter<T>();

  public inputFocused$: Observable<boolean>;
  public selectedOption: SelectOption<T> | null = null;

  public inputFocusedSubject$ = new BehaviorSubject(false);

  constructor() {
    this.inputFocused$ = this.inputFocusedSubject$.pipe(shareReplay(2));
  }

  public selectOption(option: SelectOption<T>) {
    this.selectedOption = option;
    this.selectedOptionChanged.emit(option.value);
    console.log(this.selectedOption);
  }
}

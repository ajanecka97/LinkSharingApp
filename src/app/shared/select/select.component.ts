import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  signal,
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
export class SelectComponent<T> implements AfterViewInit, OnDestroy {
  @Input() public inputId!: string;
  @Input() public options!: SelectOption<T>[];
  @Input() public label!: string;

  @Output() public selectedOptionChanged = new EventEmitter<T>();

  @ViewChild('selectInput') public selectInput!: ElementRef;
  @ViewChild('selectBox') public selectBox!: ElementRef;

  public inputFocused$: Observable<boolean>;
  public selectedOption: SelectOption<T> | null = null;
  public inputFocusedSubject$ = new BehaviorSubject(false);
  public selectBoxOpened = signal(false);

  private outsideClickFunction: () => void = () => {};

  constructor(private renderer: Renderer2) {
    this.inputFocused$ = this.inputFocusedSubject$.pipe(shareReplay(2));
  }

  public ngAfterViewInit(): void {
    this.outsideClickFunction = this.renderer.listen(
      'window',
      'click',
      (e: Event) => {
        console.log(e.target, this.selectInput, this.selectBox);
        if (
          e.target !== this.selectInput.nativeElement &&
          e.target !== this.selectBox?.nativeElement
        ) {
          this.inputFocusedSubject$.next(false);
        }
      }
    );
  }

  public ngOnDestroy(): void {
    this.outsideClickFunction();
  }

  public selectOption(option: SelectOption<T>) {
    this.selectedOption = option;
    this.selectedOptionChanged.emit(option.value);
    console.log(this.selectedOption);
  }
}

import { Component, Input } from '@angular/core';
import { FormControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule,
        AsyncPipe,
    ],
})
export class InputComponent {
  @Input() public inputId = '';
  @Input() public set control(control: FormControl) {
    this.error$ = control.statusChanges.pipe(
      map(() => this.getErrorMessage(control.errors))
    );
    this.formControl = control;
  }
  @Input() public label = '';
  @Input() public icon = '';
  @Input() public placeholder = '';
  @Input() public inputType = '';

  public formControl: FormControl = new FormControl();
  public error$ = new Observable<string>();
  public inputFocused$ = new BehaviorSubject(false);

  private getErrorMessage(errors: ValidationErrors | null): string {
    if (errors == null) return '';

    if (errors['required']) return 'Empty';
    if (errors['minlength']) return 'Too short';
    if (errors['email']) return 'Invalid email';
    if (errors['password']) return 'Invalid password';
    if (errors['noMatch']) return "Passwords don't match";
    if (errors['alreadyExists']) return 'User already exists';

    return 'Unknown validation error';
  }
}

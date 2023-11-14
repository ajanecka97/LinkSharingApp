import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ErrorApiResponse, ErrorCode } from 'src/app/shared/shared.model';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { InputComponent } from '../../shared/input/input.component';
import { AuthBoxComponent } from '../auth-box/auth-box.component';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
    standalone: true,
    imports: [
        AuthBoxComponent,
        ReactiveFormsModule,
        InputComponent,
        RouterLink,
    ],
})
export class SignUpComponent {
  public signupForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    },
    {
      updateOn: 'blur',
    }
  );

  constructor(private authService: AuthService, private router: Router) {}

  public async signUp(): Promise<boolean> {
    if (
      !this.signupForm.valid ||
      this.signupForm.value.email == null ||
      this.signupForm.value.password == null ||
      this.signupForm.value.confirmPassword == null
    ) {
      return new Promise(() => false);
    }

    if (
      this.signupForm.value.password !== this.signupForm.value.confirmPassword
    ) {
      this.signupForm.controls.password.setErrors({ noMatch: true });
      this.signupForm.controls.confirmPassword.setErrors({ noMatch: true });
      return new Promise(() => false);
    }

    const response = this.authService.register(
      this.signupForm.value.email,
      this.signupForm.value.password
    );

    if (response.type === 'error') {
      const errorResponse = response.body as ErrorApiResponse;

      console.log(errorResponse);

      switch (errorResponse.appErrorCode) {
        case ErrorCode.UserAlreadyExists:
          this.signupForm.controls.email.setErrors({ alreadyExists: true });
          break;
      }

      return new Promise(() => false);
    }

    await this.router.navigate(['/dashboard']);
    return new Promise(() => false);
  }
}

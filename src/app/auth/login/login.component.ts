import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthRequest } from '../auth.model';
import { AuthService } from '../services/auth.service';
import { ErrorApiResponse, ErrorCode } from 'src/app/shared/shared.model';
import { Router, RouterLink } from '@angular/router';
import { InputComponent } from '../../shared/input/input.component';
import { AuthBoxComponent } from '../auth-box/auth-box.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        AuthBoxComponent,
        ReactiveFormsModule,
        InputComponent,
        RouterLink,
    ],
})
export class LoginComponent {
  public loginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    },
    {
      updateOn: 'blur',
    }
  );

  constructor(private authService: AuthService, private router: Router) {}

  public async login(): Promise<boolean> {
    if (
      !this.loginForm.valid ||
      this.loginForm.value.email == null ||
      this.loginForm.value.password == null
    ) {
      return new Promise(() => false);
    }

    const response = this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    );

    if (response.type === 'error') {
      const errorResponse = response.body as ErrorApiResponse;

      console.log(errorResponse);

      switch (errorResponse.appErrorCode) {
        case ErrorCode.NoUserWithSuchEmail:
          this.loginForm.controls.email.setErrors({ email: true });
          break;
        case ErrorCode.IncorrectPassword:
          this.loginForm.controls.password.setErrors({ password: true });
          break;
      }

      return new Promise(() => false);
    }

    await this.router.navigate(['/dashboard']);
    return new Promise(() => false);
  }
}

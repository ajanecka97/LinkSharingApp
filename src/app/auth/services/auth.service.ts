import { ErrorApiResponse, ErrorCode } from './../../shared/shared.model';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/shared/shared.model';
import { AuthResponse } from '../auth.model';
import { authTokenKey } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly allowedLogins: Map<string, string> = new Map([
    ['user@example.com', 'password'],
  ]);
  private readonly token = 'example-token';

  constructor() {}

  public login(email: string, password: string): ApiResponse<AuthResponse> {
    if (!this.allowedLogins.has(email)) {
      return this.generateError(ErrorCode.NoUserWithSuchEmail);
    }

    if (this.allowedLogins.get(email) !== password) {
      return this.generateError(ErrorCode.IncorrectPassword);
    }

    localStorage.setItem(authTokenKey, this.token);

    return this.generateSuccess({
      token: this.token,
      userData: {
        username: email,
      },
    });
  }

  public register(email: string, password: string): ApiResponse<AuthResponse> {
    if (this.allowedLogins.has(email)) {
      return this.generateError(ErrorCode.UserAlreadyExists);
    }

    this.allowedLogins.set(email, password);

    localStorage.setItem(authTokenKey, this.token);

    return this.generateSuccess({
      token: this.token,
      userData: {
        username: email,
      },
    });
  }

  private generateSuccess(body: AuthResponse): ApiResponse<AuthResponse> {
    return {
      type: 'success',
      body: body,
    };
  }

  private generateError(errorCode: ErrorCode): ApiResponse<AuthResponse> {
    return {
      type: 'error',
      body: this.generateErrorBody(errorCode),
    };
  }

  private generateErrorBody(errorCode: ErrorCode): ErrorApiResponse {
    switch (errorCode) {
      case ErrorCode.NoUserWithSuchEmail:
        return {
          httpErrorCode: 401,
          appErrorCode: errorCode,
          message: 'No user with such email',
        };
      case ErrorCode.IncorrectPassword:
        return {
          httpErrorCode: 401,
          appErrorCode: errorCode,
          message: 'Password is incorrect',
        };
      case ErrorCode.UserAlreadyExists:
        return {
          httpErrorCode: 409,
          appErrorCode: errorCode,
          message: 'User with this email already exists',
        };
    }
  }
}

import { ErrorApiResponse, ErrorCode } from './../../shared/shared.model';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/shared/shared.model';
import { AuthResponse } from '../auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly allowedLogins: Map<string, string> = new Map([
    ['user', 'password'],
  ]);

  constructor() {}

  public login(email: string, password: string): ApiResponse<AuthResponse> {
    if (!this.allowedLogins.has(email)) {
      return this.generateErrorResponse(ErrorCode.NoUserWithSuchEmail);
    }

    if (this.allowedLogins.get(email) !== password) {
      return this.generateErrorResponse(ErrorCode.NoUserWithSuchEmail);
    }

    return <AuthResponse>{
      token: 'example-token',
      userData: {
        username: email,
      },
    };
  }

  public register(email: string, password: string): ApiResponse<AuthResponse> {
    if (!this.allowedLogins.has(email)) {
      return this.generateErrorResponse(ErrorCode.UserAlreadyExists);
    }

    this.allowedLogins.set(email, password);

    return <AuthResponse>{
      token: 'example-token',
      userData: {
        username: email,
      },
    };
  }

  private generateErrorResponse(errorCode: ErrorCode): ErrorApiResponse {
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

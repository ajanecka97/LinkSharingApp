export interface ApiResponse<T> {
  type: 'success' | 'error';
  body: T | ErrorApiResponse;
}

export interface ErrorApiResponse {
  httpErrorCode: number;
  appErrorCode: ErrorCode;
  message: string;
}

export enum ErrorCode {
  NoUserWithSuchEmail = 0,
  IncorrectPassword = 1,
  UserAlreadyExists = 2,
}

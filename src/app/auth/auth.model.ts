export interface AuthRequest {
  login: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  userData: UserData;
}

export interface UserData {
  username: string;
}

export interface RegisterResponse {
  user: {
    email: string;
    name: string;
    surname: string;
    isActive: boolean;
    roles: string[];
    _id: string;
  };
  token: string;
}

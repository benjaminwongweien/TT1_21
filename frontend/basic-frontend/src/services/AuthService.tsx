import { LoginReq, LoginRes } from "../models";
import { apiService } from ".";

export class AuthService {
  async login(request: LoginReq) {
    const data = await apiService.post<LoginRes>("/login/", request);
    return data;
  }
}

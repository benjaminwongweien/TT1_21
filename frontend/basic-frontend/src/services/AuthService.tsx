import { LoginReq, LoginRes } from 'basic-api-models'
import { apiService } from '.'

export class AuthService {
  async login(request: LoginReq) {
    const { data } = await apiService.post<LoginRes>('/auth/login', request);
    return data;
  }
}

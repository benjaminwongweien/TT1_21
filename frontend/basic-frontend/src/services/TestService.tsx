import { apiService } from '.'

export class TestService {
  async test() {
    const { data } = await apiService.get<string>('/test');
    return data;
  }
}

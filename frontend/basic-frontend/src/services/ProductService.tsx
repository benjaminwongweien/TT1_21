import { apiService } from ".";

export class ProductService {
  async viewAllProducts() {
    const { data } = await apiService.get<string>("/products/");
    return data;
  }
}

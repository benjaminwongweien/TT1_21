import { AuthService } from "./AuthService";
import { TestService } from "./TestService";
import { NotificationService } from "./NotificationService";
import { ApiService } from "./ApiService";
import { ProductService } from "./ProductService";

export const apiService = new ApiService();
export const notificationService = new NotificationService();

export const authService = new AuthService();
export const productService = new ProductService();
export const testService = new TestService();

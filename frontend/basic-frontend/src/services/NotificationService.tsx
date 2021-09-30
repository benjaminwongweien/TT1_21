import { notification } from 'antd';

export class NotificationService {

  info(description: string, message = 'Info') {
    notification.open({ type: 'info', message, description });
  }

  success(description: string, message = 'Success') {
    notification.open({ type: 'success', message, description });
  }

  warning(description: string, message = 'Warning') {
    notification.open({ type: 'warning', message, description });
  }

  error(description: string, message = 'Error') {
    notification.open({ type: 'error', message, description });
  }
}

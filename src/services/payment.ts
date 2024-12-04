import { AxiosInstance } from 'axios';
import { PaymentRequest, PaymentResponse, ApiResponse } from '../types';

export class PaymentService {
  constructor(private readonly api: AxiosInstance) {}

  /**
   * Send a payment to a recipient
   */
  public async send(
    payment: PaymentRequest
  ): Promise<ApiResponse<PaymentResponse>> {
    const response = await this.api.post('/payments/send', payment);
    return response.data;
  }

  /**
   * Get payment status by ID
   */
  public async getStatus(paymentId: string): Promise<ApiResponse<PaymentResponse>> {
    const response = await this.api.get(`/payments/${paymentId}`);
    return response.data;
  }

  /**
   * Cancel a pending payment
   */
  public async cancel(paymentId: string): Promise<ApiResponse<any>> {
    const response = await this.api.post(`/payments/${paymentId}/cancel`);
    return response.data;
  }

  /**
   * Send bulk payments
   */
  public async sendBulk(
    payments: PaymentRequest[]
  ): Promise<ApiResponse<PaymentResponse[]>> {
    const response = await this.api.post('/payments/bulk', { payments });
    return response.data;
  }
}

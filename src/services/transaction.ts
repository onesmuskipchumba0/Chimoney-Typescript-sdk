import { AxiosInstance } from 'axios';
import { TransactionHistory, ApiResponse } from '../types';

export class TransactionService {
  constructor(private readonly api: AxiosInstance) {}

  /**
   * Get all transactions
   */
  public async list(
    page: number = 1,
    limit: number = 10
  ): Promise<ApiResponse<TransactionHistory[]>> {
    const response = await this.api.get('/transactions', {
      params: { page, limit },
    });
    return response.data;
  }

  /**
   * Get transaction by ID
   */
  public async get(id: string): Promise<ApiResponse<TransactionHistory>> {
    const response = await this.api.get(`/transactions/${id}`);
    return response.data;
  }

  /**
   * Get transaction summary/stats
   */
  public async getStats(
    startDate?: string,
    endDate?: string
  ): Promise<ApiResponse<any>> {
    const response = await this.api.get('/transactions/stats', {
      params: { startDate, endDate },
    });
    return response.data;
  }
}

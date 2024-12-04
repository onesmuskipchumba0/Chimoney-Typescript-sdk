import { AxiosInstance } from 'axios';
import { WalletBalance, ApiResponse } from '../types';

export class WalletService {
  constructor(private readonly api: AxiosInstance) {}

  /**
   * Get the current wallet balance
   */
  public async getBalance(): Promise<ApiResponse<WalletBalance>> {
    const response = await this.api.get('/wallet/balance');
    return response.data;
  }

  /**
   * Transfer funds between wallets
   */
  public async transfer(
    destinationWalletId: string,
    amount: number,
    currency: string
  ): Promise<ApiResponse<any>> {
    const response = await this.api.post('/wallet/transfer', {
      destinationWalletId,
      amount,
      currency,
    });
    return response.data;
  }

  /**
   * Get wallet transaction history
   */
  public async getTransactions(
    page: number = 1,
    limit: number = 10
  ): Promise<ApiResponse<any>> {
    const response = await this.api.get('/wallet/transactions', {
      params: { page, limit },
    });
    return response.data;
  }
}

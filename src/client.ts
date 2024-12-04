import axios, { AxiosInstance } from 'axios';
import { ChimoneyConfig, ApiResponse } from './types';
import { WalletService } from './services/wallet';
import { PaymentService } from './services/payment';
import { SubAccountService } from './services/subaccount';
import { TransactionService } from './services/transaction';

export class ChimoneyClient {
  private readonly api: AxiosInstance;
  private readonly config: ChimoneyConfig;

  public readonly wallet: WalletService;
  public readonly payment: PaymentService;
  public readonly subaccount: SubAccountService;
  public readonly transaction: TransactionService;

  constructor(apiKey: string, config: Partial<ChimoneyConfig> = {}) {
    this.config = {
      apiKey,
      baseURL: config.baseURL || 'https://api.chimoney.io/v1',
    };

    this.api = axios.create({
      baseURL: this.config.baseURL,
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.config.apiKey,
      },
    });

    // Initialize services
    this.wallet = new WalletService(this.api);
    this.payment = new PaymentService(this.api);
    this.subaccount = new SubAccountService(this.api);
    this.transaction = new TransactionService(this.api);
  }

  public async request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    endpoint: string,
    data?: any
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.request({
        method,
        url: endpoint,
        data,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || error.message);
      }
      throw error;
    }
  }
}

import { AxiosInstance } from 'axios';
import { SubAccount, ApiResponse } from '../types';

export class SubAccountService {
  constructor(private readonly api: AxiosInstance) {}

  /**
   * Create a new subaccount
   */
  public async create(
    name: string,
    email: string
  ): Promise<ApiResponse<SubAccount>> {
    const response = await this.api.post('/subaccounts', { name, email });
    return response.data;
  }

  /**
   * List all subaccounts
   */
  public async list(): Promise<ApiResponse<SubAccount[]>> {
    const response = await this.api.get('/subaccounts');
    return response.data;
  }

  /**
   * Get subaccount by ID
   */
  public async get(id: string): Promise<ApiResponse<SubAccount>> {
    const response = await this.api.get(`/subaccounts/${id}`);
    return response.data;
  }

  /**
   * Update subaccount
   */
  public async update(
    id: string,
    data: Partial<SubAccount>
  ): Promise<ApiResponse<SubAccount>> {
    const response = await this.api.put(`/subaccounts/${id}`, data);
    return response.data;
  }

  /**
   * Delete subaccount
   */
  public async delete(id: string): Promise<ApiResponse<void>> {
    const response = await this.api.delete(`/subaccounts/${id}`);
    return response.data;
  }
}

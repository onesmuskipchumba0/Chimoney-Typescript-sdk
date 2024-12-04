export interface ChimoneyConfig {
  apiKey: string;
  baseURL?: string;
}

export interface ApiResponse<T> {
  status: string;
  data: T;
  message?: string;
}

export interface WalletBalance {
  usd: number;
  chi: number;
  localCurrency?: {
    code: string;
    amount: number;
  };
}

export interface PaymentRequest {
  email: string;
  amount: number;
  currency: string;
  description?: string;
  metadata?: Record<string, any>;
}

export interface PaymentResponse {
  id: string;
  status: 'pending' | 'completed' | 'failed';
  amount: number;
  currency: string;
  recipient: {
    email: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface SubAccount {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface TransactionHistory {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  currency: string;
  status: 'success' | 'pending' | 'failed';
  metadata?: Record<string, any>;
  createdAt: string;
}

export interface GiftCard {
  id: string;
  code: string;
  amount: number;
  currency: string;
  status: 'active' | 'redeemed' | 'expired';
  expiresAt: string;
}

export interface MobileMoneyRequest {
  phoneNumber: string;
  amount: number;
  currency: string;
  provider: string;
  country: string;
}

export interface BankTransferRequest {
  accountNumber: string;
  bankCode: string;
  amount: number;
  currency: string;
  country: string;
  description?: string;
}

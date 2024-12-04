# Chimoney TypeScript SDK

A strongly-typed TypeScript SDK for integrating Chimoney's payment infrastructure into your applications.

## Installation

```bash
npm install chimoney-typescript-sdk
```

## Usage

```typescript
import { ChimoneyClient } from 'chimoney-typescript-sdk';

// Initialize the client
const chimoney = new ChimoneyClient('YOUR_API_KEY');

// Example: Get wallet balance
const balance = await chimoney.wallet.getBalance();

// Example: Send money
const payment = await chimoney.payments.send({
  email: 'recipient@example.com',
  amount: 100,
  currency: 'USD'
});
```

## Features

- 🚀 Full TypeScript support with type definitions
- 📦 Modern ES6+ syntax
- 🔒 Secure API key handling
- 🌐 Support for all Chimoney API endpoints
- ⚡ Promise-based async operations
- 🧪 Comprehensive test coverage

## API Documentation

### Initialization

```typescript
import { ChimoneyClient } from 'chimoney-typescript-sdk';

const chimoney = new ChimoneyClient('YOUR_API_KEY');
```

### Available Modules

- Wallet Operations
- Payment Operations
- Subaccount Management
- Transaction History
- Gift Cards
- Mobile Money
- Bank Transfers

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Build: `npm run build`
4. Test: `npm test`

## License

MIT

## Contributing

Contributions are welcome! Please read our contributing guidelines for details.

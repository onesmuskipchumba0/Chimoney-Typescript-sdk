import { ChimoneyClient } from '../client';

describe('ChimoneyClient', () => {
  const client = new ChimoneyClient('test-api-key');

  it('should be properly initialized', () => {
    expect(client).toBeInstanceOf(ChimoneyClient);
    expect(client.wallet).toBeDefined();
    expect(client.payment).toBeDefined();
    expect(client.transaction).toBeDefined();
    expect(client.subaccount).toBeDefined();
  });

  // Add more tests as needed for specific functionality
});

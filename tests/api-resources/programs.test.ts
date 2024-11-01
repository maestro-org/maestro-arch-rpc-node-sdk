// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Maestro from '@maestro-org/maestro-arch-rpc-node-sdk';
import { Response } from 'node-fetch';

const client = new Maestro({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource programs', () => {
  // skipped: tests are disabled for the time being
  test.skip('accounts', async () => {
    const responsePromise = client.programs.accounts({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});

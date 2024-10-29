// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MaestroArchRpc from 'maestro-arch-rpc-sdk';
import { Response } from 'node-fetch';

const client = new MaestroArchRpc({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource accounts', () => {
  test('address: only required params', async () => {
    const responsePromise = client.accounts.address([0, 0, 0]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('address: required and optional params', async () => {
    const response = await client.accounts.address([0, 0, 0]);
  });

  test('info: only required params', async () => {
    const responsePromise = client.accounts.info([0, 0, 0]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('info: required and optional params', async () => {
    const response = await client.accounts.info([0, 0, 0]);
  });
});

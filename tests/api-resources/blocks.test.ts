// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MaestroArchRpc from 'maestro-arch-rpc';
import { Response } from 'node-fetch';

const client = new MaestroArchRpc({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource blocks', () => {
  test('retrieve', async () => {
    const responsePromise = client.blocks.retrieve('height_or_hash');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.blocks.retrieve('height_or_hash', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MaestroArchRpc.NotFoundError);
  });

  test('count', async () => {
    const responsePromise = client.blocks.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('count: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.blocks.count({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      MaestroArchRpc.NotFoundError,
    );
  });

  test('latest', async () => {
    const responsePromise = client.blocks.latest();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('latest: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.blocks.latest({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      MaestroArchRpc.NotFoundError,
    );
  });

  test('latestHash', async () => {
    const responsePromise = client.blocks.latestHash();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('latestHash: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.blocks.latestHash({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      MaestroArchRpc.NotFoundError,
    );
  });

  test('range', async () => {
    const responsePromise = client.blocks.range('start_height', 'end_height');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('range: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.blocks.range('start_height', 'end_height', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MaestroArchRpc.NotFoundError);
  });

  test('range: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.blocks.range(
        'start_height',
        'end_height',
        { count: 0, page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(MaestroArchRpc.NotFoundError);
  });

  test('recent', async () => {
    const responsePromise = client.blocks.recent(1);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('recent: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.blocks.recent(1, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      MaestroArchRpc.NotFoundError,
    );
  });
});

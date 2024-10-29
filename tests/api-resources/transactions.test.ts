// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Maestro from '@maestro-org/maestro-arch-rpc-node-sdk';
import { Response } from 'node-fetch';

const client = new Maestro({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource transactions', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.transactions.retrieve('tx_hash');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.transactions.retrieve('tx_hash', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Maestro.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('batchSend: only required params', async () => {
    const responsePromise = client.transactions.batchSend([{}, {}, {}]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('batchSend: required and optional params', async () => {
    const response = await client.transactions.batchSend([
      {
        message: {
          instructions: [
            {
              accounts: [
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
              ],
              data: [0, 0, 0],
              program_id: [0, 0, 0],
            },
            {
              accounts: [
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
              ],
              data: [0, 0, 0],
              program_id: [0, 0, 0],
            },
            {
              accounts: [
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
              ],
              data: [0, 0, 0],
              program_id: [0, 0, 0],
            },
          ],
          signers: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
        },
        signatures: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        version: 0,
      },
      {
        message: {
          instructions: [
            {
              accounts: [
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
              ],
              data: [0, 0, 0],
              program_id: [0, 0, 0],
            },
            {
              accounts: [
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
              ],
              data: [0, 0, 0],
              program_id: [0, 0, 0],
            },
            {
              accounts: [
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
              ],
              data: [0, 0, 0],
              program_id: [0, 0, 0],
            },
          ],
          signers: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
        },
        signatures: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        version: 0,
      },
      {
        message: {
          instructions: [
            {
              accounts: [
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
              ],
              data: [0, 0, 0],
              program_id: [0, 0, 0],
            },
            {
              accounts: [
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
              ],
              data: [0, 0, 0],
              program_id: [0, 0, 0],
            },
            {
              accounts: [
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
                { is_signer: true, is_writable: true, pubkey: [0, 0, 0] },
              ],
              data: [0, 0, 0],
              program_id: [0, 0, 0],
            },
          ],
          signers: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
        },
        signatures: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        version: 0,
      },
    ]);
  });

  // skipped: tests are disabled for the time being
  test.skip('send', async () => {
    const responsePromise = client.transactions.send({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});

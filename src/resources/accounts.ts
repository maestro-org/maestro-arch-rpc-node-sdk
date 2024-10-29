// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as AccountsAPI from './accounts';

export class Accounts extends APIResource {
  /**
   * Account address by pubkey
   */
  address(
    body: AccountAddressParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountAddressResponse> {
    return this._client.post('/account/address', { body, ...options });
  }

  /**
   * Account info by pubkey
   */
  info(body: AccountInfoParams, options?: Core.RequestOptions): Core.APIPromise<AccountInfoResponse> {
    return this._client.post('/account/info', { body, ...options });
  }
}

export interface AccountAddressResponse {
  data?: string;

  last_updated?: AccountAddressResponse.LastUpdated;
}

export namespace AccountAddressResponse {
  export interface LastUpdated {
    block_hash?: string;

    block_height?: number;
  }
}

export interface AccountInfoResponse {
  data?: AccountInfoResponse.Data;

  last_updated?: AccountInfoResponse.LastUpdated;
}

export namespace AccountInfoResponse {
  export interface Data {
    data?: Array<number>;

    is_executable?: boolean;

    owner?: Array<number>;

    utxo?: string;
  }

  export interface LastUpdated {
    block_hash?: string;

    block_height?: number;
  }
}

export type AccountAddressParams = Array<number>;

export type AccountInfoParams = Array<number>;

export namespace Accounts {
  export import AccountAddressResponse = AccountsAPI.AccountAddressResponse;
  export import AccountInfoResponse = AccountsAPI.AccountInfoResponse;
  export import AccountAddressParams = AccountsAPI.AccountAddressParams;
  export import AccountInfoParams = AccountsAPI.AccountInfoParams;
}

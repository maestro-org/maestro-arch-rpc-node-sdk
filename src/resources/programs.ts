// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ProgramsAPI from './programs';

export class Programs extends APIResource {
  /**
   * Program accounts
   */
  accounts(
    body: ProgramAccountsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProgramAccountsResponse> {
    return this._client.post('/program/accounts', { body, ...options });
  }
}

export interface ProgramAccountsResponse {
  data?: Array<ProgramAccountsResponse.Data>;

  last_updated?: ProgramAccountsResponse.LastUpdated;
}

export namespace ProgramAccountsResponse {
  export interface Data {
    account?: Data.Account;

    pubkey?: Array<number>;
  }

  export namespace Data {
    export interface Account {
      data?: Array<number>;

      is_executable?: boolean;

      owner?: Array<number>;

      utxo?: string;
    }
  }

  export interface LastUpdated {
    block_hash?: string;

    block_height?: number;
  }
}

export interface ProgramAccountsParams {
  filters?: Array<ProgramAccountsParams.Filter>;

  program_id?: Array<number>;
}

export namespace ProgramAccountsParams {
  export interface Filter {
    dataSize?: number;

    memcmp?: Filter.Memcmp;
  }

  export namespace Filter {
    export interface Memcmp {
      /**
       * hex-encoded bytes
       */
      bytes?: string;

      offset?: number;
    }
  }
}

export namespace Programs {
  export import ProgramAccountsResponse = ProgramsAPI.ProgramAccountsResponse;
  export import ProgramAccountsParams = ProgramsAPI.ProgramAccountsParams;
}

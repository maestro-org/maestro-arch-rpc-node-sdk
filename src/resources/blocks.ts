// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as BlocksAPI from './blocks';

export class Blocks extends APIResource {
  /**
   * Block info by height or hash
   */
  retrieve(heightOrHash: string, options?: Core.RequestOptions): Core.APIPromise<BlockRetrieveResponse> {
    return this._client.get(`/block/${heightOrHash}`, options);
  }

  /**
   * Block count
   */
  count(options?: Core.RequestOptions): Core.APIPromise<BlockCountResponse> {
    return this._client.get('/block/count', options);
  }

  /**
   * Latest block info
   */
  latest(options?: Core.RequestOptions): Core.APIPromise<BlockLatestResponse> {
    return this._client.get('/block/latest', options);
  }

  /**
   * Latest block hash
   */
  latestHash(options?: Core.RequestOptions): Core.APIPromise<BlockLatestHashResponse> {
    return this._client.get('/block/latest/hash', options);
  }

  /**
   * Block range info by start and end height
   */
  range(
    startHeight: string,
    endHeight: string,
    query?: BlockRangeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BlockRangeResponse>;
  range(
    startHeight: string,
    endHeight: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BlockRangeResponse>;
  range(
    startHeight: string,
    endHeight: string,
    query: BlockRangeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BlockRangeResponse> {
    if (isRequestOptions(query)) {
      return this.range(startHeight, endHeight, {}, query);
    }
    return this._client.get(`/block/range/${startHeight}/${endHeight}`, { query, ...options });
  }

  /**
   * Recent block info by count
   */
  recent(count: number, options?: Core.RequestOptions): Core.APIPromise<BlockRecentResponse> {
    return this._client.get(`/block/recent/${count}`, options);
  }
}

export interface BlockRetrieveResponse {
  data?: BlockRetrieveResponse.Data;

  last_updated?: BlockRetrieveResponse.LastUpdated;
}

export namespace BlockRetrieveResponse {
  export interface Data {
    bitcoin_block_height?: number;

    hash?: string;

    merkle_root?: string;

    previous_block_hash?: string;

    timestamp?: number;

    transaction_count?: number;

    transactions?: Array<string>;
  }

  export interface LastUpdated {
    block_hash?: string;

    block_height?: number;
  }
}

export interface BlockCountResponse {
  data?: number;

  last_updated?: BlockCountResponse.LastUpdated;
}

export namespace BlockCountResponse {
  export interface LastUpdated {
    block_hash?: string;

    block_height?: number;
  }
}

export interface BlockLatestResponse {
  data?: BlockLatestResponse.Data;

  last_updated?: BlockLatestResponse.LastUpdated;
}

export namespace BlockLatestResponse {
  export interface Data {
    bitcoin_block_height?: number;

    hash?: string;

    height?: number;

    merkle_root?: string;

    previous_block_hash?: string;

    timestamp?: number;

    transaction_count?: number;

    transactions?: Array<string>;
  }

  export interface LastUpdated {
    block_hash?: string;

    block_height?: number;
  }
}

export interface BlockLatestHashResponse {
  data?: string;

  last_updated?: BlockLatestHashResponse.LastUpdated;
}

export namespace BlockLatestHashResponse {
  export interface LastUpdated {
    block_hash?: string;

    block_height?: number;
  }
}

export interface BlockRangeResponse {
  data?: Array<BlockRangeResponse.Data>;

  last_updated?: BlockRangeResponse.LastUpdated;
}

export namespace BlockRangeResponse {
  export interface Data {
    bitcoin_block_height?: number;

    hash?: string;

    height?: number;

    merkle_root?: string;

    previous_block_hash?: string;

    timestamp?: number;

    transaction_count?: number;

    transactions?: Array<string>;
  }

  export interface LastUpdated {
    block_hash?: string;

    block_height?: number;
  }
}

export interface BlockRecentResponse {
  data?: Array<BlockRecentResponse.Data>;

  last_updated?: BlockRecentResponse.LastUpdated;
}

export namespace BlockRecentResponse {
  export interface Data {
    bitcoin_block_height?: number;

    hash?: string;

    height?: number;

    merkle_root?: string;

    previous_block_hash?: string;

    timestamp?: number;

    transaction_count?: number;

    transactions?: Array<string>;
  }

  export interface LastUpdated {
    block_hash?: string;

    block_height?: number;
  }
}

export interface BlockRangeParams {
  /**
   * Number of blocks.
   */
  count?: number;

  /**
   * Page number.
   */
  page?: number;
}

export namespace Blocks {
  export import BlockRetrieveResponse = BlocksAPI.BlockRetrieveResponse;
  export import BlockCountResponse = BlocksAPI.BlockCountResponse;
  export import BlockLatestResponse = BlocksAPI.BlockLatestResponse;
  export import BlockLatestHashResponse = BlocksAPI.BlockLatestHashResponse;
  export import BlockRangeResponse = BlocksAPI.BlockRangeResponse;
  export import BlockRecentResponse = BlocksAPI.BlockRecentResponse;
  export import BlockRangeParams = BlocksAPI.BlockRangeParams;
}

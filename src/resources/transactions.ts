// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TransactionsAPI from './transactions';

export class Transactions extends APIResource {
  /**
   * Processed transaction info by hash
   */
  retrieve(txHash: string, options?: Core.RequestOptions): Core.APIPromise<TransactionRetrieveResponse> {
    return this._client.get(`/transaction/${txHash}`, options);
  }

  /**
   * Send multiple transactions to the network
   */
  batchSend(
    body: TransactionBatchSendParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionBatchSendResponse> {
    return this._client.post('/transaction/send/batch', { body, ...options });
  }

  /**
   * Send transaction to the network
   */
  send(body: TransactionSendParams, options?: Core.RequestOptions): Core.APIPromise<TransactionSendResponse> {
    return this._client.post('/transaction/send', { body, ...options });
  }
}

export interface TransactionRetrieveResponse {
  data?: TransactionRetrieveResponse.Data;

  last_updated?: TransactionRetrieveResponse.LastUpdated;
}

export namespace TransactionRetrieveResponse {
  export interface Data {
    bitcoin_txids?: Array<string>;

    runtime_transaction?: Data.RuntimeTransaction;

    status?: string;
  }

  export namespace Data {
    export interface RuntimeTransaction {
      message?: RuntimeTransaction.Message;

      signatures?: Array<Array<number>>;

      version?: number;
    }

    export namespace RuntimeTransaction {
      export interface Message {
        instructions?: Array<Message.Instruction>;

        signers?: Array<Array<number>>;
      }

      export namespace Message {
        export interface Instruction {
          accounts?: Array<Instruction.Account>;

          data?: Array<number>;

          program_id?: Array<number>;
        }

        export namespace Instruction {
          export interface Account {
            is_signer?: boolean;

            is_writable?: boolean;

            pubkey?: Array<number>;
          }
        }
      }
    }
  }

  export interface LastUpdated {
    block_hash?: string;

    block_height?: number;
  }
}

export interface TransactionBatchSendResponse {
  data?: Array<string>;

  last_updated?: TransactionBatchSendResponse.LastUpdated;
}

export namespace TransactionBatchSendResponse {
  export interface LastUpdated {
    block_hash?: string;

    block_height?: number;
  }
}

export interface TransactionSendResponse {
  data?: string;

  last_updated?: TransactionSendResponse.LastUpdated;
}

export namespace TransactionSendResponse {
  export interface LastUpdated {
    block_hash?: string;

    block_height?: number;
  }
}

export type TransactionBatchSendParams = Array<TransactionBatchSendParams.Body>;

export namespace TransactionBatchSendParams {
  export interface Body {
    message?: Body.Message;

    signatures?: Array<Array<number>>;

    version?: number;
  }

  export namespace Body {
    export interface Message {
      instructions?: Array<Message.Instruction>;

      signers?: Array<Array<number>>;
    }

    export namespace Message {
      export interface Instruction {
        accounts?: Array<Instruction.Account>;

        data?: Array<number>;

        program_id?: Array<number>;
      }

      export namespace Instruction {
        export interface Account {
          is_signer?: boolean;

          is_writable?: boolean;

          pubkey?: Array<number>;
        }
      }
    }
  }
}

export interface TransactionSendParams {
  message?: TransactionSendParams.Message;

  signatures?: Array<Array<number>>;

  version?: number;
}

export namespace TransactionSendParams {
  export interface Message {
    instructions?: Array<Message.Instruction>;

    signers?: Array<Array<number>>;
  }

  export namespace Message {
    export interface Instruction {
      accounts?: Array<Instruction.Account>;

      data?: Array<number>;

      program_id?: Array<number>;
    }

    export namespace Instruction {
      export interface Account {
        is_signer?: boolean;

        is_writable?: boolean;

        pubkey?: Array<number>;
      }
    }
  }
}

export namespace Transactions {
  export import TransactionRetrieveResponse = TransactionsAPI.TransactionRetrieveResponse;
  export import TransactionBatchSendResponse = TransactionsAPI.TransactionBatchSendResponse;
  export import TransactionSendResponse = TransactionsAPI.TransactionSendResponse;
  export import TransactionBatchSendParams = TransactionsAPI.TransactionBatchSendParams;
  export import TransactionSendParams = TransactionsAPI.TransactionSendParams;
}

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">AccountAddressResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountInfoResponse</a></code>

Methods:

- <code title="post /account/address">client.accounts.<a href="./src/resources/accounts.ts">address</a>([ ...body ]) -> AccountAddressResponse</code>
- <code title="post /account/info">client.accounts.<a href="./src/resources/accounts.ts">info</a>([ ...body ]) -> AccountInfoResponse</code>

# Blocks

Types:

- <code><a href="./src/resources/blocks.ts">BlockRetrieveResponse</a></code>
- <code><a href="./src/resources/blocks.ts">BlockCountResponse</a></code>
- <code><a href="./src/resources/blocks.ts">BlockLatestResponse</a></code>
- <code><a href="./src/resources/blocks.ts">BlockLatestHashResponse</a></code>
- <code><a href="./src/resources/blocks.ts">BlockRangeResponse</a></code>
- <code><a href="./src/resources/blocks.ts">BlockRecentResponse</a></code>

Methods:

- <code title="get /block/{height_or_hash}">client.blocks.<a href="./src/resources/blocks.ts">retrieve</a>(heightOrHash) -> BlockRetrieveResponse</code>
- <code title="get /block/count">client.blocks.<a href="./src/resources/blocks.ts">count</a>() -> BlockCountResponse</code>
- <code title="get /block/latest">client.blocks.<a href="./src/resources/blocks.ts">latest</a>() -> BlockLatestResponse</code>
- <code title="get /block/latest/hash">client.blocks.<a href="./src/resources/blocks.ts">latestHash</a>() -> BlockLatestHashResponse</code>
- <code title="get /block/range/{start_height}/{end_height}">client.blocks.<a href="./src/resources/blocks.ts">range</a>(startHeight, endHeight, { ...params }) -> BlockRangeResponse</code>
- <code title="get /block/recent/{count}">client.blocks.<a href="./src/resources/blocks.ts">recent</a>(count) -> BlockRecentResponse</code>

# Programs

Types:

- <code><a href="./src/resources/programs.ts">ProgramAccountsResponse</a></code>

Methods:

- <code title="post /program/accounts">client.programs.<a href="./src/resources/programs.ts">accounts</a>({ ...params }) -> ProgramAccountsResponse</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">TransactionRetrieveResponse</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionBatchSendResponse</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionSendResponse</a></code>

Methods:

- <code title="get /transaction/{tx_hash}">client.transactions.<a href="./src/resources/transactions.ts">retrieve</a>(txHash) -> TransactionRetrieveResponse</code>
- <code title="post /transaction/send/batch">client.transactions.<a href="./src/resources/transactions.ts">batchSend</a>([ ...body ]) -> TransactionBatchSendResponse</code>
- <code title="post /transaction/send">client.transactions.<a href="./src/resources/transactions.ts">send</a>({ ...params }) -> TransactionSendResponse</code>

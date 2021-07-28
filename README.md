# Feed Registry Example

## Setup

```sh
yarn install
```

Create a `.env` file in the project and supply a node url:

```
KOVAN_RPC_URL=https://eth-kovan.alchemyapi.io/v2/your-api-key
```

> This example's unit tests uses [forking](https://hardhat.org/guides/mainnet-forking.html). To use this feature you need to connect to an archive node.

## Compilation

```
yarn compile
```

## Testing 

```
yarn test
```

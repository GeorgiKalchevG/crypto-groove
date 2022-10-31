# NFT Launchpad

DApp that enables users to mint watermarked NFTs for a specified price in our own ERC20 Token.

## What does this dApp do?

1. Each mint results in increasing the price with 1% (e.g. after 100 NFTs being minted the price is increased with 100%).
2. Allows users to sell, stake and trade their NFTs.
3. Support both ERC721 and ERC1155
   
4. Selling of the NFTs should happen the same way as OpenSea (e.g. user signs a message
   off-chain and the message is verified on-chain during buying the NFT).
   
5. Staking the NFT should generate NFTOKENs with a fixed APY. E.g. staking NFT results in 1000
   NFTOKENs per month.
   
6. Build an “Oracle” to track NFTOKEN prices.
   
7. Generated NFTOKENs can be used as a collateral to generate USD pegged stable coin
   (nUSD)
   
8. NFTOKENs and nUSD can be traded via automated market maker.

## How do I deploy this?

Follow our deployment guides for [Vercel](https://beta.create.t3.gg/en/deployment/vercel).

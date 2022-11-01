# crypto-groove
The Final Assignment
NFT Launchpad with ERC20 Token and Algorithmic Stablecoin
Create a dApp that enables users to mint watermarked NFTs for a specified price in our own
ERC20 Token (e.g NFTOKEN). Each mint results in increasing the price with 1% (e.g. after 100 NFTs
being minted the price is increased with 100%). The dApp should also allow users to sell, stake
and trade their NFTs.
1. Support both ERC721 and ERC1155
2. Selling of the NFTs should happen the same way as OpenSea (e.g. user signs a message
off-chain and the message is verified on-chain during buying the NFT).
3. Staking the NFT should generate NFTOKENs with a fixed APY. E.g. staking NFT results in 1000
NFTOKENs per month.
4.  Build an “Oracle” to track NFTOKEN prices.
5. Generated NFTOKENs can be used as a collateral to generate USD pegged stable coin
(nUSD)
6. NFTOKENs and nUSD can be traded via automated market maker


App can be found here https://crypto-groove.vercel.app
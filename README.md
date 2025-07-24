# Third Planet Studio

Creative Concierge

## Web3 Configuration

This project uses the following Web3 services:

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Thirdweb Configuration
VITE_THIRDWEB_CLIENT_ID=your_thirdweb_client_id
VITE_THIRDWEB_SECRET_KEY=your_thirdweb_secret_key

# Reown AppKit Configuration
VITE_REOWN_PROJECT_ID=your_reown_project_id

# Contract Configuration
VITE_CONTRACT_ADDRESS=your_contract_address
VITE_NETWORK_CHAIN_ID=137
```

### Thirdweb

- **Client ID**: Set via `VITE_THIRDWEB_CLIENT_ID`
- **Contract**: Set via `VITE_CONTRACT_ADDRESS` (Polygon ERC1155)
- **Network**: Polygon Mainnet (Chain ID: 137)

### Reown AppKit

- **Project ID**: Set via `VITE_REOWN_PROJECT_ID`
- **Purpose**: Wallet connection and Web3 integration
- **Networks**: Polygon

## Development

```bash
npm install
npm run dev
```

## Features

- Native NFT minting for All Access Pass
- Wallet connection via AppKit
- Responsive design with Tailwind CSS
- SvelteKit 5 with runes

## Troubleshooting

### Insufficient Balance Error

If you see "insufficient balance for transfer" error, this means:

1. The wallet doesn't have enough MATIC for gas fees
2. The wallet doesn't have the required tokens to mint
3. The contract requires payment for minting

Make sure your wallet has sufficient MATIC for gas fees on Polygon network.

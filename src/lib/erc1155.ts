import { getContract } from "thirdweb";
import { client } from "./thirdwebClient";

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
const chainId = import.meta.env.VITE_NETWORK_CHAIN_ID;

if (!contractAddress) {
	throw new Error('VITE_CONTRACT_ADDRESS is not set in environment variables');
}

if (!chainId) {
	throw new Error('VITE_NETWORK_CHAIN_ID is not set in environment variables');
}

export const contract = getContract({
	client,
	chain: {
		id: parseInt(chainId),
		name: "Polygon",
		rpc: "https://polygon-rpc.com"
	},
	address: contractAddress,
}); 
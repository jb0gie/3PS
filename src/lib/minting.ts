import {
	safeTransferFrom,
} from "thirdweb/extensions/erc1155";
import { sendAndConfirmTransaction } from "thirdweb";
import { contract } from "./erc1155";

interface MintParams {
	from: string;
	to: string;
	quantity?: number;
}

// Mint function for All Access Pass
export async function mintAllAccessPass({ from, to, quantity = 1 }: MintParams) {
	try {
		const transaction = safeTransferFrom({
			contract,
			from, // Buyer's wallet address
			to, // Recipient address (usually same as from)
			tokenId: 1n, // All Access Pass token ID
			value: BigInt(quantity), // Quantity to mint
			data: "0x", // Optional data
		});

		// Handle wallet connection and signing
		const transactionReceipt = await sendAndConfirmTransaction({
			account: from, // The connected wallet/account
			transaction,
		});

		return { success: true, receipt: transactionReceipt };
	} catch (error) {
		console.error('Minting error:', error);
		const errorMessage = error instanceof Error ? error.message : 'Unknown error';
		return { success: false, error: errorMessage };
	}
} 
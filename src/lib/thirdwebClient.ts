import { createThirdwebClient } from "thirdweb";

const clientId = import.meta.env.VITE_THIRDWEB_CLIENT_ID;
const secretKey = import.meta.env.VITE_THIRDWEB_SECRET_KEY;

if (!clientId) {
	throw new Error('VITE_THIRDWEB_CLIENT_ID is not set in environment variables');
}

if (!secretKey) {
	throw new Error('VITE_THIRDWEB_SECRET_KEY is not set in environment variables');
}

export const client = createThirdwebClient({
	clientId,
	secretKey,
}); 
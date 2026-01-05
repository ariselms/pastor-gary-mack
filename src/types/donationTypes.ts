export interface DonationProductData {
  id?: number | null;
  language?: string,
	name: string;
	description: string;
	amount?: number | null;
	frequency?: string;
	images?: string[];
}
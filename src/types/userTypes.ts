export interface UserType {
	id: string | null; // or number | null, depending on your actual ID type
	name: string;
	contact_email: string;
	contact_phone: string;
  image_url?: string;
	session_token?: string;
	session_expiration?: string | null;
  created_at?: Date | string;
  updated_at?: Date | string | null;
	email_code_number?: string;
	email_code_expiration?: string | null;
	address_street: string;
	address_city: string;
	address_state: string;
	address_zip: string;
  address_country: string;
  resume_url?: string;
}
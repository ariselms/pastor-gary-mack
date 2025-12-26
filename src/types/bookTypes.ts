export interface StripeProduct {
	id: string;
	object: "product";
	active: boolean;
	attributes: string[];
	created: number;
	default_price?: Price;
	description: string | null;
	images: string[];
	livemode: boolean;
	marketing_features: Array<any>;
	metadata: Record<string, string>;
	name: string;
	package_dimensions: {
		height: number;
		length: number;
		weight: number;
		width: number;
	} | null;
	shippable: boolean | null;
	statement_descriptor: string | null;
	tax_code: string | null;
	type: "service" | "good" | string;
	unit_label: string | null;
	updated: number;
	url: string | null;
}

export interface Price {
	id: string;
	object: "price";
	active: boolean;
	billing_scheme: "per_unit" | "tiered";
	created: number;
	currency: string;
	custom_unit_amount: {
		maximum: number | null;
		minimum: number | null;
		preset: number | null;
	} | null;
	livemode: boolean;
	lookup_key: string | null;
	metadata: Record<string, string>;
	nickname: string | null;
	product: string; // This is a string ID because it wasn't expanded
	recurring: {
		aggregate_usage: string | null;
		interval: "day" | "week" | "month" | "year";
		interval_count: number;
		trial_period_days: number | null;
		usage_type: "licensed" | "metered";
	} | null;
	tax_behavior: "inclusive" | "exclusive" | "unspecified";
	tiers_mode: "graduated" | "volume" | null;
	transform_quantity: {
		divide_by: number;
		round: "up" | "down";
	} | null;
	type: "one_time" | "recurring";
	unit_amount: number | null;
	unit_amount_decimal: string | null;
}
export function ContainerSm({ children }: { children: React.ReactNode }) {
	return <div className="max-w-sm mx-auto px-4">{children}</div>;
}

export function ContainerMd({ children }: { children: React.ReactNode }){
  return <div className="max-w-md mx-auto px-4">{children}</div>;
}

export function ContainerLg({ children }: { children: React.ReactNode }) {
	return <div className="max-w-lg mx-auto px-4">{children}</div>;
}

export function ContainerXl({ children }: { children: React.ReactNode }) {
	return <div className="max-w-xl mx-auto px-4">{children}</div>;
}

export function Container2xl({ children }: { children: React.ReactNode }) {
	return <div className="max-w-2xl mx-auto px-4">{children}</div>;
}

// Medium
export function Container3xl({ children }: { children: React.ReactNode }) {
	return <div className="max-w-3xl mx-auto px-4">{children}</div>;
}

export function Container7xl({ children }: { children: React.ReactNode }) {
	return <div className="max-w-7xl mx-auto px-4">{children}</div>;
}

export function MaxTextWidth({ children }: { children: React.ReactNode }) {
	return <div className="max-w-[80ch]">{children}</div>;
}



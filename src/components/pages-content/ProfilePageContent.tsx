"use client";

import { Container7xl } from "@/components/containers";
import { languageOptions } from "@/static";
import { TabItem, Tabs } from "flowbite-react";
import UserProfileForm from "@/components/forms/UserProfile";
import Link from "next/link";
import { useLanguageContext } from "@/context/languageContext";
import { useAuthContext } from "@/context/authContext";
import { UserBooksOrders } from "@/components/books/UserBooksOrders";
import { userRoles } from "@/static";
import { UserDonationsTab } from "@/components/donations/UserDonations";
import { UserProductsOrders } from "@/components/store/UserProductsOrders";

export default function ProfilePage() {
	const { language } = useLanguageContext();
	const { user } = useAuthContext();

	return (
		<section>
			<nav className="bg-slate-950 py-8">
				<Container7xl>
					<h3 className="text-3xl text-slate-100 flex items-center">
						{language === languageOptions?.english ? "Profile" : "Perfil"}
					</h3>
					{user?.role === userRoles.admin && (
						<Link
							href="/profile/admin"
							className="text-sm text-cyan-400 hover:underline">
							{language === languageOptions?.english ? (
								<>
									Go to Admin Dashboard
									<span className="ms-1" aria-hidden="true">
										&rarr;
									</span>
								</>
							) : (
								"Ir al Panel de Administración"
							)}
						</Link>
					)}
				</Container7xl>
			</nav>
			<div className="bg-black text-white py-8">
				<Container7xl>
					<Tabs
						aria-label="Default tabs"
						variant="default"
						className="text-white">
						<TabItem
							title={
								language === languageOptions.english
									? "Edit Profile"
									: "Editar Perfil"
							}>
							<UserProfileForm user={user} update={true} />
						</TabItem>
						<TabItem
							title={language === languageOptions.english ? "Books" : "Libros"}>
							<UserBooksOrders user={user} />
						</TabItem>
						<TabItem
							title={
								language === languageOptions.english
									? "Donations"
									: "Donaciones"
							}>
							<UserDonationsTab
								userEmail={user?.contact_email}
								language={language}
								languageOptions={languageOptions}
							/>
						</TabItem>
						<TabItem
							title={
								language === languageOptions.english ? "Products" : "Productos"
							}>
							<UserProductsOrders
								userId={user?.id}
								language={language}
								languageOptions={languageOptions}
							/>
						</TabItem>
					</Tabs>
				</Container7xl>
			</div>
		</section>
	);
}

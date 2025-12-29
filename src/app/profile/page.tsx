"use client";

import {Container7xl} from "@/components/containers";
import { languageOptions } from "@/static";
import { TabItem, Tabs } from "flowbite-react";
import UserProfileForm from "@/components/forms/UserProfile";
import Link from "next/link";
import { useLanguageContext } from "@/context/languageContext";
import { useAuthContext } from "@/context/authContext";
import { useState } from "react";
import Spinner from "@/components/Spinner";
import { UserOrders } from "@/components/books/UserOrders";
import { UserDonationsTab } from "@/components/donations/UserDonations";

export default function ProfilePage() {
  const { language } = useLanguageContext();
  const { user } = useAuthContext();

  const [loading, setLoading] = useState(false);

	return (
		<section>
			{loading ? (
				<Spinner />
			) : (
				<>
					<nav className="bg-white dark:bg-stone-950 py-16">
						<Container7xl>
							<h3 className="text-3xl dark:text-white flex items-center">
								{language === languageOptions?.english ? "Profile" : "Perfil"}
							</h3>
							{user?.role === "admin" && (
								<Link
									href="/profile/admin"
									className="text-sm text-cyan-500 dark:text-cyan-400 hover:underline">
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
					<div className="bg-stone-200 dark:bg-black">
						<Container7xl>
							<Tabs
								aria-label="Default tabs"
								variant="underline"
								className="text-black dark:text-white">
								<TabItem
									className="text-black dark:text-white"
									title={
										language === languageOptions.english
											? "Edit Profile"
											: "Editar Perfil"
									}>
									<UserProfileForm user={user} update={true} />
								</TabItem>
								<TabItem
									title={
										language === languageOptions.english ? "Orders" : "Órdenes"
									}>
									<UserOrders user={user} />
								</TabItem>
								<TabItem
									title={
										language === languageOptions.english ? "Donations" : "Donaciones"
									}>
									<UserDonationsTab userEmail={user?.contact_email} language={language} languageOptions={languageOptions} />
								</TabItem>
							</Tabs>
						</Container7xl>
					</div>
				</>
			)}
		</section>
	);
}

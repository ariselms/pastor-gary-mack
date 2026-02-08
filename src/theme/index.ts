import { createTheme } from "flowbite-react";

export const DrawerTheme = createTheme({
	root: {
		base: "fixed z-40 overflow-y-auto bg-white p-4 transition-transform",
		backdrop: "fixed inset-0 z-30 bg-gray-900/50",
		edge: "bottom-16",
		position: {
			top: {
				on: "left-0 right-0 top-0 w-full transform-none",
				off: "left-0 right-0 top-0 w-full -translate-y-full"
			},
			right: {
				on: "right-0 top-0 h-screen w-80 transform-none",
				off: "right-0 top-0 h-screen w-80 translate-x-full"
			},
			bottom: {
				on: "bottom-0 left-0 right-0 w-full transform-none",
				off: "bottom-0 left-0 right-0 w-full translate-y-full"
			},
			left: {
				on: "left-0 top-0 h-screen w-80 transform-none",
				off: "left-0 top-0 h-screen w-80 -translate-x-full"
			}
		}
	},
	header: {
		inner: {
			closeButton:
				"absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full text-sm text-gray-400 bg-red-700 hover:bg-red-800 text-slate-50 hover:text-slate-100 transition-all",
			closeIcon: "h-4 w-4",
			titleCloseIcon: "sr-only",
			titleIcon: "me-2.5 h-4 w-4",
			titleText:
				"mb-4 inline-flex items-center text-base font-semibold text-gray-500"
		},
		collapsed: {
			on: "hidden",
			off: "block"
		}
	},
	items: {
		base: ""
	}
});

export const TabsTheme = createTheme({
	base: "flex flex-col gap-2",
	tablist: {
		base: "flex text-center",
		variant: {
			default: "flex-wrap border-b border-slate-800",
			underline:
				"-mb-px flex-wrap border-b border-gray-200",
			pills:
				"flex-wrap space-x-2 text-sm font-medium text-gray-500",
			fullWidth:
				"grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow"
		},
		tabitem: {
			base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400",
			variant: {
				default: {
					base: "rounded-t-lg",
					active: {
						on: "bg-slate-800 text-slate-200",
						off: "text-slate-400 hover:bg-slate-700 hover:text-slate-100"
					}
				},
				underline: {
					base: "rounded-t-lg",
					active: {
						on: "rounded-t-lg border-b-2 border-primary-600 text-primary-600",
						off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600"
					}
				},
				pills: {
					base: "",
					active: {
						on: "rounded-lg bg-primary-600 text-white",
						off: "rounded-lg hover:bg-gray-100 hover:text-gray-900"
					}
				},
				fullWidth: {
					base: "ml-0 flex w-full rounded-none first:ml-0",
					active: {
						on: "rounded-none bg-gray-100 p-4 text-gray-900",
						off: "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700"
					}
				}
			},
			icon: "mr-2 h-5 w-5"
		}
	},
	tabitemcontainer: {
		base: "",
		variant: {
			default: "",
			underline: "",
			pills: "",
			fullWidth: ""
		}
	},
	tabpanel: "py-3"
});


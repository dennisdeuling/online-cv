import { FunctionComponent, useLayoutEffect, useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarTrigger
} from '@/components/ui/sidebar';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select.tsx';

import { useTranslation } from 'react-i18next';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BuyMeACoffeeButton } from '@/pages/Layout/BuyMeACoffeeButton/BuyMeACoffeeButton.tsx';
import { BuyMeACoffeeWidget } from '@/pages/Layout/BuyMeACoffeeWidget/BuyMeACoffeeWidget.tsx';

import { v4 as uuidv4 } from 'uuid';

import { getIcon } from '@/lib/iconMap.ts';

export const Layout: FunctionComponent = () => {
	const [buyMeACoffee, setBuyMeACoffee] = useState<boolean>(false);
	const [language, setLanguage] = useState<string>('en');
	const location = useLocation();

	const {
		t,
		i18n: { changeLanguage }
	} = useTranslation();

	const personalInformation = t('sideBar.personalInformation', {
		returnObjects: true
	}) as Array<{ key: string; value: string }>;

	const navigation = (
		t('sideBar.navigation', { returnObjects: true }) as Array<{
			text: string;
			url: string;
		}>
	).map(item => {
		const { text, url } = item;
		const newItem = { text, url, icon: getIcon(url) };

		return { ...newItem };
	});

	const socials = (
		t('sideBar.socials', { returnObjects: true }) as Array<{ network: string; url: string }>
	).map(item => {
		const { network, url } = item;
		const newItem = {
			url,
			icon: getIcon(network)
		};

		return { ...newItem };
	});

	const languages = (
		t('sideBar.languages', { returnObjects: true }) as Array<{ language: string }>
	).map(item => {
		const { language } = item;
		const newItem = {
			language,
			icon: getIcon('language')
		};

		return { ...newItem };
	});

	const hobbies = (t('sideBar.hobbies', { returnObjects: true }) as Array<{ hobby: string }>).map(
		item => {
			const { hobby } = item;
			const newItem = {
				hobby,
				icon: getIcon(hobby)
			};

			return { ...newItem };
		}
	);

	const toggleBuyMeACoffee = () => {
		setBuyMeACoffee(() => !buyMeACoffee);
	};

	useLayoutEffect(() => {
		changeLanguage(language);
	}, [language]);

	return (
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<Avatar className="flex aspect-square size-30 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
								<AvatarImage src="https://avatars.githubusercontent.com/u/69396302?v=4" />
								<AvatarFallback>Dennis Deuling</AvatarFallback>
							</Avatar>
						</SidebarMenuItem>
						<SidebarMenuItem className="flex justify-around">
							<Select value={language} onValueChange={setLanguage}>
								<SelectTrigger className="w-1/2">
									<SelectValue placeholder="Language" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="de">German</SelectItem>
										<SelectItem value="en">English</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</SidebarMenuItem>
						<SidebarMenuItem>
							{personalInformation.map(item => {
								return (
									<div key={uuidv4()} className="flex justify-between">
										<h2 className="font-bold">{item.key}:</h2>
										<h3>{item.value}</h3>
									</div>
								);
							})}
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarMenu>
							{/*<SidebarGroupLabel>Socials</SidebarGroupLabel>*/}
							<div className="flex justify-around">
								{socials.map(item => (
									<SidebarMenuItem key={uuidv4()}>
										<SidebarMenuButton asChild>
											<a href={item.url} target="_blank">
												<item.icon />
											</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</div>
							<SidebarGroupLabel>Navigation</SidebarGroupLabel>
							{navigation.map(item => (
								<SidebarMenuItem key={uuidv4()}>
									<SidebarMenuButton asChild isActive={location.pathname === item.url}>
										<Link to={item.url}>
											<item.icon />
											<span>{item.text}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
							<SidebarGroupLabel>Languages</SidebarGroupLabel>
							{languages.map(item => {
								return (
									<SidebarMenuItem key={uuidv4()}>
										<SidebarMenuButton className="cursor-default">
											<item.icon />
											<span>{item.language}</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								);
							})}
							<SidebarGroupLabel>Hobbies</SidebarGroupLabel>
							{hobbies.map(item => {
								return (
									<SidebarMenuItem key={uuidv4()}>
										<SidebarMenuButton className="cursor-default">
											<item.icon />
											<span>{item.hobby}</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								);
							})}
							<BuyMeACoffeeButton onClick={toggleBuyMeACoffee} />
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<SidebarInset>
				<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
					<SidebarTrigger className="-ml-1" />
					<Outlet />
					{buyMeACoffee && <BuyMeACoffeeWidget onClick={toggleBuyMeACoffee} />}
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
};

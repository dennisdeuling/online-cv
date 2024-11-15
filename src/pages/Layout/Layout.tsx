import { FunctionComponent, useLayoutEffect, useState } from 'react';
import {
	BriefcaseBusiness,
	ChefHat,
	Code,
	Dumbbell,
	FolderGit2,
	Github,
	GraduationCap,
	House,
	Languages,
	Linkedin,
	Wrench
} from 'lucide-react';

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
	SidebarProvider
} from '@/components/ui/sidebar';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import { NavigationEnums } from '@/lib/NavigationEnums.tsx';
import { BuyMeACoffeeButton } from '@/pages/Layout/BuyMeACoffeeButton/BuyMeACoffeeButton.tsx';
import { BuyMeACoffeeWidget } from '@/pages/Layout/BuyMeACoffeeWidget/BuyMeACoffeeWidget.tsx';

import { v4 as uuidv4 } from 'uuid';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select.tsx';

export const data = {
	projects: [
		{
			name: 'About Me',
			url: NavigationEnums.aboutMe,
			icon: House
		},
		{
			name: 'Work Experience',
			url: NavigationEnums.workExperience,
			icon: BriefcaseBusiness
		},
		{
			name: 'Education',
			url: NavigationEnums.education,
			icon: GraduationCap
		},
		{
			name: 'Skills',
			url: NavigationEnums.skills,
			icon: Wrench
		},
		{
			name: 'Projects',
			url: NavigationEnums.projects,
			icon: FolderGit2
		}
	],
	socials: [
		{
			icon: Linkedin,
			url: 'https://www.linkedin.com/in/dennis-deuling-080331141/'
		},
		{
			icon: Github,
			url: 'https://github.com/dennisdeuling'
		}
	]
};

export const Layout: FunctionComponent = () => {
	const [buyMeACoffee, setBuyMeACoffee] = useState<boolean>(false);
	const [language, setLanguage] = useState<string>('en');

	const {
		t,
		i18n: { changeLanguage }
	} = useTranslation();

	const personalInformation = t('personalInformation', {
		returnObjects: true
	}) as Array<{ key: string; value: string }>;

	const toggleBuyMeACoffee = () => {
		setBuyMeACoffee(() => !buyMeACoffee);
	};

	useLayoutEffect(() => {
		changeLanguage(language);
	}, [language]);

	return (
		<SidebarProvider>
			<Sidebar collapsible="icon">
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
								{data.socials.map(item => (
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
							{data.projects.map(item => (
								<SidebarMenuItem key={uuidv4()}>
									<SidebarMenuButton asChild>
										<Link to={item.url}>
											<item.icon />
											<span>{item.name}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
							<SidebarGroupLabel>Languages</SidebarGroupLabel>
							{(t('languages', { returnObjects: true }) as Array<string>).map(language => {
								return (
									<SidebarMenuItem key={uuidv4()}>
										<SidebarMenuButton className="cursor-default">
											<Languages />
											<span>{language}</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								);
							})}
							<SidebarGroupLabel>Hobbies</SidebarGroupLabel>
							{(t('hobbies', { returnObjects: true }) as Array<string>).map(hobby => {
								return (
									<SidebarMenuItem key={uuidv4()}>
										<SidebarMenuButton className="cursor-default">
											{hobby.toLowerCase() === 'cooking' && <ChefHat />}
											{hobby.toLowerCase() === 'fitness' && <Dumbbell />}
											{hobby.toLowerCase() === 'coding' && <Code />}
											<span>{hobby}</span>
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
					<Outlet />
					{buyMeACoffee && <BuyMeACoffeeWidget onClick={toggleBuyMeACoffee} />}
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
};

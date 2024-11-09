import { FunctionComponent, useState } from 'react';
import {
	BriefcaseBusiness,
	ChefHat,
	Code,
	Dumbbell,
	FolderGit2,
	GraduationCap,
	House,
	Languages,
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
	]
};

export const Layout: FunctionComponent = () => {
	const [buyMeACoffee, setBuyMeACoffee] = useState<boolean>(false);
	const { t } = useTranslation();

	const personalInformation = t('personalInformation', {
		returnObjects: true
	}) as Array<{ key: string; value: string }>;

	const toggleBuyMeACoffee = () => {
		setBuyMeACoffee(() => !buyMeACoffee);
	};

	return (
		<SidebarProvider>
			<Sidebar collapsible="icon">
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<Avatar className="flex aspect-square size-30 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</SidebarMenuItem>
						<SidebarMenuItem>
							{personalInformation.map(item => {
								return (
									<div key={item.key} className="flex justify-between">
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
						<SidebarGroupLabel>Navigation</SidebarGroupLabel>
						<SidebarMenu>
							{data.projects.map(item => (
								<SidebarMenuItem key={item.name}>
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
									<SidebarMenuItem key={language}>
										<SidebarMenuButton>
											<Languages />
											<span>{language}</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								);
							})}
							<SidebarGroupLabel>Hobbies</SidebarGroupLabel>
							{(t('hobbies', { returnObjects: true }) as Array<string>).map(hobby => {
								return (
									<SidebarMenuItem key={hobby}>
										<SidebarMenuButton>
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

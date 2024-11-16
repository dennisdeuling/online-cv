import { NavigationEnums } from '@/lib/NavigationEnums.tsx';
import {
	BriefcaseBusiness,
	FolderGit2,
	Github,
	GraduationCap,
	House,
	Linkedin,
	Wrench
} from 'lucide-react';

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

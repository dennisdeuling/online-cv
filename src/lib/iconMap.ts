import {
	BriefcaseBusiness,
	ChefHat,
	CircleHelp,
	Code,
	Dumbbell,
	FolderGit2,
	Github,
	GraduationCap,
	House,
	Languages,
	Linkedin,
	LucideIcon,
	Wrench
} from 'lucide-react';

const iconMap = new Map<string, LucideIcon>([
	['house', House],
	['briefcaseBusiness', BriefcaseBusiness],
	['graduationCap', GraduationCap],
	['wrench', Wrench],
	['git', FolderGit2],
	['linkedin', Linkedin],
	['github', Github],
	['code', Code],
	['dumbbell', Dumbbell],
	['cooking', ChefHat],
	['language', Languages],
	['fallback', CircleHelp]
]);

export const getIcon = (input: string): LucideIcon => {
	input = input.toLowerCase().replace('/', '');

	switch (input) {
		case 'about-me':
		case 'ueber-mich':
			return iconMap.get('house') as LucideIcon;

		case 'work-experience':
		case 'lebenslauf':
			return iconMap.get('briefcaseBusiness') as LucideIcon;

		case 'education':
		case 'ausbildung':
			return iconMap.get('graduationCap') as LucideIcon;

		case 'skills':
		case 'faehigkeiten':
			return iconMap.get('wrench') as LucideIcon;

		case 'projects':
		case 'projekte':
			return iconMap.get('git') as LucideIcon;

		case 'coding':
		case 'programmieren':
			return iconMap.get('code') as LucideIcon;

		case 'fitness':
		case 'sport':
			return iconMap.get('dumbbell') as LucideIcon;

		case 'cooking':
		case 'kochen':
			return iconMap.get('cooking') as LucideIcon;

		case 'github':
			return iconMap.get('github') as LucideIcon;

		case 'linkedin':
			return iconMap.get('linkedin') as LucideIcon;

		case 'language':
			return iconMap.get('language') as LucideIcon;

		default:
			return iconMap.get('fallback') as LucideIcon;
	}
};

import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { TimelineLayout } from '@/pages/WorkExperience/TimelineLayout.tsx';
import { useHeadline } from '@/hooks/useHeadline.ts';

export const WorkExperience: FunctionComponent = () => {
	const { t } = useTranslation();
	const headline = useHeadline();

	const workExperience = t('workExperience', { returnObjects: true }) as Array<{
		companyName: string;
		jobTitle: string;
		experience: string[];
		startDate: string;
		endDate: string;
	}>;

	return (
		<>
			<div>
				<h1 className="text-7xl font-bold">{headline}</h1>
			</div>
			<TimelineLayout workExperience={workExperience} />
		</>
	);
};

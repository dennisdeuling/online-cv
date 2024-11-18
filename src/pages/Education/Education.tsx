import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card.tsx';
import { CalendarDays, GraduationCap } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { useHeadline } from '@/hooks/useHeadline.ts';
import { PageHeadline } from '@/pages/PageHeadline/PageHeadline.tsx';

export const Education: FunctionComponent = () => {
	const { t } = useTranslation();
	const headline = useHeadline();

	return (
		<>
			<PageHeadline>{headline}</PageHeadline>
			<div className="flex justify-center gap-10 flex-wrap">
				{(
					t('education', { returnObjects: true }) as Array<{
						fieldOfStudy: string;
						schoolName: string;
						startDate: Date;
						endDate: Date;
					}>
				)
					.sort((a, b) => b.startDate.valueOf() - a.startDate.valueOf())
					.map(education => {
						return (
							<Card key={uuidv4()}>
								<CardHeader>
									<div className="flex items-center gap-2">
										<GraduationCap />
										<CardTitle>{education.fieldOfStudy}</CardTitle>
									</div>
									<CardDescription>{education.schoolName}</CardDescription>
								</CardHeader>
								<CardContent className="flex gap-3">
									<CalendarDays />
									<p>{`${education.startDate} - ${education.endDate}`}</p>
								</CardContent>
							</Card>
						);
					})}
			</div>
		</>
	);
};

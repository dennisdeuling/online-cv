import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card.tsx';

import { v4 as uuidv4 } from 'uuid';
import { useHeadline } from '@/hooks/useHeadline.ts';
import { PageHeadline } from '@/pages/PageHeadline/PageHeadline.tsx';

export const Projects: FunctionComponent = () => {
	const { t } = useTranslation();
	const headline = useHeadline();

	const projects = t('projects', { returnObjects: true }) as Array<{
		company: string;
		industry: string;
		startDate: string;
		endDate: string;
		role: string;
		technologies: string[];
		tasks: string[];
		challenges?: string[];
	}>;

	return (
		<>
			<PageHeadline>{headline}</PageHeadline>
			<ul className="flex items-baseline flex-wrap">
				{projects.map(project => {
					return (
						<li className="relative mb-6 w-1/4 max-md:w-full max-xl:w-1/2" key={uuidv4()}>
							<div className="flex items-center">
								<div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white shrink-0">
									<svg
										className="w-2.5 h-2.5 text-blue-800"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
									</svg>
								</div>
								<div className="flex items-center w-full bg-gray-200 h-0.5">
									<span className="ml-4 text-sm text-muted-foreground bg-white">{`${project.startDate} - ${project.endDate}`}</span>
								</div>
							</div>
							<Card className="-mt-4 mb-6 border-t-0">
								<CardHeader>
									<CardTitle>{project.company}</CardTitle>
									<CardDescription>{project.role}</CardDescription>
								</CardHeader>
								<CardContent>
									<p>
										{project.technologies.map(
											(tech, index) =>
												`${tech}${index < project.technologies.length - 1 ? ', ' : ''}`
										)}
									</p>
								</CardContent>
								<CardFooter>
									<ul className="list-disc">
										{project.tasks.map(task => {
											return <li key={uuidv4()}>{task}</li>;
										})}
									</ul>
								</CardFooter>
							</Card>
						</li>
					);
				})}
			</ul>
		</>
	);
};

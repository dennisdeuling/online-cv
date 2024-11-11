import { FunctionComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';

type TimelineElement = {
	companyName: string;
	jobTitle: string;
	experience: string[];
	startDate: string;
	endDate: string;
};

type TimelineLayoutProps = {
	workExperience: TimelineElement[];
};

export const TimelineLayout: FunctionComponent<TimelineLayoutProps> = ({ workExperience }) => {
	return (
		<div className="flex justify-center">
			<ul className="relative border-s border-gray-200">
				{workExperience.map(experience => {
					return (
						<li className="mb-10 ms-4" key={uuidv4()}>
							<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
							<time className="mb-1 text-sm font-normal leading-none text-gray-400">
								{`${experience.startDate} - ${experience.endDate}`}
							</time>
							<h3 className="text-lg font-semibold text-gray-900">{experience.companyName}</h3>
							<h4 className="text-base font-semibold text-gray-400">{experience.jobTitle}</h4>
							<ul className="ml-4 mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc">
								{experience.experience.map(task => {
									return <li key={uuidv4()}>{task}</li>;
								})}
							</ul>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { FunctionComponent, ReactNode } from 'react';

type CustomCardProps = {
	headline: string;
	content: ReactNode;
};

export const CustomCard: FunctionComponent<CustomCardProps> = ({ headline, content }) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{headline}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid auto-rows-min gap-4 grid-cols-3 max-sm:grid-cols-1 max-xl:grid-cols-2">
					{content}
				</div>
			</CardContent>
		</Card>
	);
};

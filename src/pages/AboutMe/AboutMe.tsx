import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { ContactForm } from '@/pages/AboutMe/ContactForm/ContactForm.tsx';

export const AboutMe: FunctionComponent = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className="mb-16 flex justify-between items-center gap-20">
				{(t('aboutMe.KPIs', { returnObjects: true }) as Array<{ key: string; value: string }>).map(
					kpi => {
						return (
							<div
								className="p-4 border-4 rounded-tr-3xl rounded-bl-3xl text-center"
								key={kpi.key.toLowerCase()}
							>
								<p className="text-4xl font-bold">{`${kpi.value}${kpi.key.toLowerCase() !== 'birthdate' ? '+' : ''}`}</p>
								<p className="font-thin">{kpi.key}</p>
							</div>
						);
					}
				)}
			</div>
			<p className="text-xl font-thin leading-7 [&:not(:first-child)]:mt-6">{t('aboutMe.text')}</p>
			<div className="mx-32">
				<ContactForm />
			</div>
		</>
	);
};

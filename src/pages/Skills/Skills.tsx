import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '@/components/ui/slider.tsx';
import { CustomCard } from '@/pages/Skills/Card/CustomCard.tsx';
import { v4 as uuidv4 } from 'uuid';
import { useHeadline } from '@/hooks/useHeadline.ts';

export const Skills: FunctionComponent = () => {
	const { t } = useTranslation();
	const headline = useHeadline();

	return (
		<>
			<div>
				<h1 className="text-7xl font-bold">{headline}</h1>
			</div>
			<CustomCard
				headline={t('skills.frameworks.headline')}
				content={(
					t('skills.frameworks.data', { returnObjects: true }) as Array<{
						framework: string;
						level: number;
					}>
				).map(framework => {
					return (
						<div key={uuidv4()}>
							<div className="flex justify-between">
								<h2>{framework.framework}</h2>
								<p className="text-sm">{framework.level}%</p>
							</div>
							<Slider value={[Number(framework.level)]} max={100} step={1} />
						</div>
					);
				})}
			/>

			<CustomCard
				headline={t('skills.webTechnologies.headline')}
				content={(t('skills.webTechnologies.data', { returnObjects: true }) as Array<string>).map(
					technology => {
						return (
							<div
								key={uuidv4()}
								className="flex justify-center items-center rounded-3xl border border-slate-900 bg-slate-900 px-2 py-1 text-white"
							>
								<h2>{technology}</h2>
							</div>
						);
					}
				)}
			/>

			<div className="grid auto-rows-min gap-4 grid-cols-2 max-lg:grid-cols-1">
				<CustomCard
					headline={t('skills.scriptingLanguages.headline')}
					content={(
						t('skills.scriptingLanguages.data', { returnObjects: true }) as Array<string>
					).map(language => {
						return (
							<div
								key={uuidv4()}
								className="flex justify-center items-center flex-wrap rounded-3xl border border-slate-900 bg-slate-900 px-2 py-1 text-white"
							>
								<h2>{language}</h2>
							</div>
						);
					})}
				/>
				<CustomCard
					headline={t('skills.cloudServices.headline')}
					content={(t('skills.cloudServices.data', { returnObjects: true }) as Array<string>).map(
						service => {
							return (
								<div
									key={uuidv4()}
									className="flex justify-center items-center rounded-3xl border border-slate-900 bg-slate-900 px-2 py-1 text-white"
								>
									<h2>{service}</h2>
								</div>
							);
						}
					)}
				/>
				<CustomCard
					headline={t('skills.databases.headline')}
					content={(t('skills.databases.data', { returnObjects: true }) as Array<string>).map(
						database => {
							return (
								<div
									key={uuidv4()}
									className="flex justify-center items-center rounded-3xl border border-slate-900 bg-slate-900 px-2 py-1 text-white"
								>
									<h2>{database}</h2>
								</div>
							);
						}
					)}
				/>
				<CustomCard
					headline={t('skills.devOps.headline')}
					content={(t('skills.devOps.data', { returnObjects: true }) as Array<string>).map(
						devOp => {
							return (
								<div
									key={uuidv4()}
									className="flex justify-center items-center rounded-3xl border border-slate-900 bg-slate-900 px-2 py-1 text-white"
								>
									<h2>{devOp}</h2>
								</div>
							);
						}
					)}
				/>
			</div>
			<CustomCard
				headline={t('skills.testing.headline')}
				content={(t('skills.testing.data', { returnObjects: true }) as Array<string>).map(
					testing => {
						return (
							<div
								key={uuidv4()}
								className="flex justify-center items-center rounded-3xl border border-slate-900 bg-slate-900 px-2 py-1 text-white"
							>
								<h2>{testing}</h2>
							</div>
						);
					}
				)}
			/>
		</>
	);
};

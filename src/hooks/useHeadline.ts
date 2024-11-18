import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export const useHeadline = () => {
	const { t } = useTranslation();
	const [headline, setHeadline] = useState<string>('');
	const location = useLocation();

	useEffect(() => {
		const headline = (
			t('sideBar.navigation', { returnObjects: true }) as Array<{
				text: string;
				url: string;
			}>
		).find(item => item.url === location.pathname)?.text as string;
		setHeadline(headline);
	}, [location, t]);

	return headline;
};

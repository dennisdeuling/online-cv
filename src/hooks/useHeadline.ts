import { useLocation } from 'react-router-dom';
import { data } from '@/pages/Layout/Layout.tsx';

export const useHeadline = () => {
	const location = useLocation();

	return data.projects.find(site => site.url === location.pathname.replace('/', ''))?.name;
};

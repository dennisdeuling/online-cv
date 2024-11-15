import { FunctionComponent } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.tsx';
import './i18next/i18n.config.ts';
import './index.css';

export const App: FunctionComponent = () => {
	return <RouterProvider router={router} />;
};

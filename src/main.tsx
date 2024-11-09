import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './i18next/i18n.config.ts';
import { Layout } from '@/pages/Layout/Layout.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Education } from '@/pages/Education/Education.tsx';
import { WorkExperience } from '@/pages/WorkExperience/WorkExperience.tsx';
import { Skills } from '@/pages/Skills/Skills.tsx';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage.tsx';
import { NavigationEnums } from '@/lib/NavigationEnums.tsx';
import { AboutMe } from '@/pages/AboutMe/AboutMe.tsx';
import { Projects } from '@/pages/Projects/Projects.tsx';

const router = createBrowserRouter([
	{
		path: NavigationEnums.home,
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: NavigationEnums.aboutMe, element: <AboutMe /> },
			{
				path: NavigationEnums.education,
				element: <Education />
			},
			{
				path: NavigationEnums.workExperience,
				element: <WorkExperience />
			},
			{
				path: NavigationEnums.skills,
				element: <Skills />
			},
			{
				path: NavigationEnums.projects,
				element: <Projects />
			}
		]
	}
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);

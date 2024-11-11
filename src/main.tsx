import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './i18next/i18n.config.ts';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage.tsx';
import { NavigationEnums } from '@/lib/NavigationEnums.tsx';

const router = createBrowserRouter([
	{
		path: NavigationEnums.home,
		errorElement: <ErrorPage />,
		async lazy() {
			const { Layout } = await import('@/pages/Layout/Layout.tsx');
			return { Component: Layout };
		},
		children: [
			{
				path: NavigationEnums.home,
				element: <Navigate to={`/${NavigationEnums.aboutMe}`} replace />
			},
			{
				path: NavigationEnums.aboutMe,
				async lazy() {
					const { AboutMe } = await import('@/pages/AboutMe/AboutMe.tsx');
					return { Component: AboutMe };
				}
			},
			{
				path: NavigationEnums.education,
				async lazy() {
					const { Education } = await import('@/pages/Education/Education.tsx');
					return { Component: Education };
				}
			},
			{
				path: NavigationEnums.workExperience,
				async lazy() {
					const { WorkExperience } = await import('@/pages/WorkExperience/WorkExperience.tsx');
					return { Component: WorkExperience };
				}
			},
			{
				path: NavigationEnums.skills,
				async lazy() {
					const { Skills } = await import('@/pages/Skills/Skills.tsx');
					return { Component: Skills };
				}
			},
			{
				path: NavigationEnums.projects,
				async lazy() {
					const { Projects } = await import('@/pages/Projects/Projects.tsx');
					return { Component: Projects };
				}
			}
		]
	}
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);

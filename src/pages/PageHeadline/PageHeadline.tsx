import { FunctionComponent, PropsWithChildren } from 'react';

export const PageHeadline: FunctionComponent<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<h1 className="mt-8 mb-8 flex items-center justify-center text-7xl font-bold">{children}</h1>
		</div>
	);
};

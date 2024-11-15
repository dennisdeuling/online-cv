import { FunctionComponent, PropsWithChildren, useLayoutEffect } from 'react';
import * as WebFont from 'webfontloader';

export const PageHeadline: FunctionComponent<PropsWithChildren> = ({ children }) => {
	useLayoutEffect(() => {
		WebFont.load({
			google: {
				families: ['Audiowide']
			}
		});
	}, []);
	return (
		<div>
			<h1
				style={{ fontFamily: 'AudioWide' }}
				className="mt-8 mb-8 flex items-center justify-center text-7xl font-dotoMedium"
			>
				{children}
			</h1>
		</div>
	);
};

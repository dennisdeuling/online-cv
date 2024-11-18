import { FunctionComponent } from 'react';
import { Button } from '@/components/ui/button.tsx';
import { BuyMeACoffeeLogo } from '@/pages/Layout/BuyMeACoffeeButton/BuyMeACoffeeLogo.tsx';
import { useTranslation } from 'react-i18next';

type BuyMeACoffeeButtonProps = {
	onClick: () => void;
};

export const BuyMeACoffeeButton: FunctionComponent<BuyMeACoffeeButtonProps> = ({ onClick }) => {
	const { t } = useTranslation();

	return (
		<Button
			onClick={onClick}
			type="button"
			className="bg-yellow-500 hover:bg-yellow-900 hover:stroke-white"
		>
			<BuyMeACoffeeLogo />
			{t('sideBar.buyMeACoffeeButton.text')}
		</Button>
	);
};

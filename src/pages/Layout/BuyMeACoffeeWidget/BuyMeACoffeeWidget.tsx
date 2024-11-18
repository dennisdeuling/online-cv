import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

type BuyMeACoffeeWidgetProps = {
	onClick: () => void;
};

export const BuyMeACoffeeWidget: FunctionComponent<BuyMeACoffeeWidgetProps> = ({ onClick }) => {
	const { t } = useTranslation();
	return (
		<div
			className="relative z-10"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true"
			onClick={onClick}
		>
			<div
				className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
				aria-hidden="true"
			></div>

			<div className="fixed inset-0 z-10 w-screen overflow-hidden">
				<div className="flex min-h-full justify-center text-center items-center p-0">
					<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-lg">
						<div className="bg-white px-4 pb-4 pt-5 p-6">
							<div className="flex items-center justify-around">
								<iframe
									src="https://buymeacoffee.com/widget/page/dennisdeuling?description=Support%20me%20on%20Buy%20me%20a%20coffee!&color=%2340DCA5"
									style={{
										height: '550px',
										width: '400px',
										overflow: 'hidden'
									}}
									scrolling="no"
								/>
							</div>
						</div>
						<div className="bg-gray-50 px-4 py-3 flex">
							<button
								type="button"
								className="p-3 inline-flex justify-center rounded-md bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-full"
								onClick={onClick}
							>
								{t('buyMeACoffeeWidget.buttonText')}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

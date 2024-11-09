import { FunctionComponent } from 'react';

type BuyMeACoffeeWidgetProps = {
	onClick: () => void;
};

export const BuyMeACoffeeWidget: FunctionComponent<BuyMeACoffeeWidgetProps> = ({ onClick }) => {
	return (
		<div
			className="relative z-10"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true"
			onClick={onClick}
		>
			{/*Background backdrop, show/hide based on modal state.*/}

			{/*Entering: "ease-out duration-300"*/}
			{/*	From: "opacity-0"*/}
			{/*	To: "opacity-100"*/}
			{/*Leaving: "ease-in duration-200"*/}
			{/*	From: "opacity-100"*/}
			{/*	To: "opacity-0"*/}

			<div
				className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
				aria-hidden="true"
			></div>

			<div className="fixed inset-0 z-10 w-screen overflow-hidden">
				<div className="flex min-h-full justify-center text-center items-center p-0">
					{/*Modal panel, show/hide based on modal state.*/}

					{/*Entering: "ease-out duration-300"*/}
					{/*	From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"*/}
					{/*	To: "opacity-100 translate-y-0 sm:scale-100"*/}
					{/*Leaving: "ease-in duration-200"*/}
					{/*	From: "opacity-100 translate-y-0 sm:scale-100"*/}
					{/*	To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"*/}

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
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

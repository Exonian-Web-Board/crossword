import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';
import { TbConfetti } from 'react-icons/tb';

export default function CongratsModal(props: {
	onHide: () => void;
	show: boolean;
	answer: string;
	guesses: string[];
}) {
	let string = `Wordle ${props.guesses.filter((item) => item).length}/6\n`;

	for (let i = 0; i < props.guesses.length; i++) {
		for (let k = 0; k < props.guesses[i].length; k++) {
			let guessChar = props.guesses[i][k];
			let answerChar = props.answer[k];

			if (guessChar === answerChar) {
				string += '🟩';
			} else if (props.answer.includes(guessChar)) {
				string += '🟨';
			} else {
				string += '⬛';
			}
		}

		string += '\n';
	}

	const [open, setOpen] = useState(true);

	const cancelButtonRef = useRef(null);

	return (
		<Transition.Root show={props.show} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-10"
				initialFocus={cancelButtonRef}
				onClose={setOpen}
			>
				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
								<div className="bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
									<div className="sm:flex sm:items-start">
										<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
											<TbConfetti
												className="h-6 w-6 text-green-600"
												aria-hidden="true"
											/>
										</div>
										<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
											<Dialog.Title
												as="h3"
												className="text-base font-semibold leading-6 text-white"
											>
												Awesome!
											</Dialog.Title>
											<div className="mt-2">
												<p className="text-sm text-white">
													You solved today's Wordle!
												</p>
											</div>
											<div className="mt-2">
												<button
													type="button"
													className="rounded-full bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
													onClick={() => {
														navigator.clipboard.writeText(
															string
														);
													}}
												>
													Share Stats
												</button>
											</div>
										</div>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}

function App() {}

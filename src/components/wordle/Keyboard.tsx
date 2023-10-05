function KeyboardButton() {
	return <button className="px-2 my-2">Q</button>;
}

export default function Keyboard() {
	return (
		<div className="mx-1 flex-col items-center">
			<div className="flex justify-center">
				<KeyboardButton />
				<KeyboardButton />
				<KeyboardButton />
				<KeyboardButton />
				<KeyboardButton />
				<KeyboardButton />
				<KeyboardButton />
				<KeyboardButton />
				<KeyboardButton />
				<KeyboardButton />
			</div>
			<div className="flex justify-center">
				<button className="keyboard-button">a</button>
				<button className="keyboard-button">s</button>
				<button className="keyboard-button">d</button>
				<button className="keyboard-button">f</button>
				<button className="keyboard-button">g</button>
				<button className="keyboard-button">h</button>
				<button className="keyboard-button">j</button>
				<button className="keyboard-button">k</button>
				<button className="keyboard-button">l</button>
			</div>
			<div className="flex justify-center">
				<button className="keyboard-button">Del</button>
				<button className="keyboard-button">z</button>
				<button className="keyboard-button">x</button>
				<button className="keyboard-button">c</button>
				<button className="keyboard-button">v</button>
				<button className="keyboard-button">b</button>
				<button className="keyboard-button">n</button>
				<button className="keyboard-button">m</button>
				<button className="keyboard-button">Enter</button>
			</div>
		</div>
	);
}

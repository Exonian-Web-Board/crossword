function KeyboardButton({ children }: { children: string }) {
	return <button className="px-2 my-2 font-semibold">{children}</button>;
}

export default function Keyboard() {
	return (
		<div className="mx-1 flex-col items-center">
			<div className="flex justify-center gap-x-2">
				<KeyboardButton>Q</KeyboardButton>
				<KeyboardButton>W</KeyboardButton>
				<KeyboardButton>E</KeyboardButton>
				<KeyboardButton>R</KeyboardButton>
				<KeyboardButton>T</KeyboardButton>
				<KeyboardButton>Y</KeyboardButton>
				<KeyboardButton>U</KeyboardButton>
				<KeyboardButton>I</KeyboardButton>
				<KeyboardButton>O</KeyboardButton>
				<KeyboardButton>P</KeyboardButton>
			</div>
			<div className="flex justify-center gap-x-1">
				<KeyboardButton>A</KeyboardButton>
				<KeyboardButton>S</KeyboardButton>
				<KeyboardButton>D</KeyboardButton>
				<KeyboardButton>F</KeyboardButton>
				<KeyboardButton>G</KeyboardButton>
				<KeyboardButton>H</KeyboardButton>
				<KeyboardButton>J</KeyboardButton>
				<KeyboardButton>K</KeyboardButton>
				<KeyboardButton>L</KeyboardButton>
			</div>
			<div className="flex justify-center">
				<KeyboardButton>Enter</KeyboardButton>
				<KeyboardButton>Z</KeyboardButton>
				<KeyboardButton>X</KeyboardButton>
				<KeyboardButton>C</KeyboardButton>
				<KeyboardButton>V</KeyboardButton>
				<KeyboardButton>B</KeyboardButton>
				<KeyboardButton>N</KeyboardButton>
				<KeyboardButton>M</KeyboardButton>
				<KeyboardButton>Del</KeyboardButton>
			</div>
		</div>
	);
}

import React from 'react';

const TextBox = ({
	letter,
	answerLetter,
}: {
	letter: string;
	answerLetter: string;
}) => {
	return (
		<>
			{letter == answerLetter.toUpperCase() ? (
				<div className="border-2 mx-2 flex items-center justify-center h-12 w-12 text-10 bg-green-500">
					{letter}
				</div>
			) : (
				<div className="border-2 mx-2 flex items-center justify-center h-12 w-12 text-10">
					{letter}
				</div>
			)}
		</>
	);
};

export default TextBox;

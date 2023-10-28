import React from 'react';

const TextBox = ({
	letter,
	answerLetter,
	answer,
}: {
	letter: string;
	answerLetter: string;
	answer: string;
}) => {
	return (
		<>
			{letter == answerLetter.toUpperCase() && (
				<div className="border-2 mx-2 flex items-center justify-center h-12 w-12 text-10 bg-green-500">
					{letter}
				</div>
			)}

			{letter != answerLetter.toUpperCase() &&
				answer.toUpperCase().includes(letter) && (
					<div className="border-2 mx-2 flex items-center justify-center h-12 w-12 text-10 bg-yellow-500">
						{letter}
					</div>
				)}

			{!answer.toUpperCase().includes(letter) && (
				<div className="border-2 mx-2 flex items-center justify-center h-12 w-12 text-10">
					{letter}
				</div>
			)}
		</>
	);
};

export default TextBox;

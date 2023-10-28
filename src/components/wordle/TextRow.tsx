import React from 'react';
import TextBox from './TextBox';

export default function TextRow({
	word,
	answer,
}: {
	word: string;
	answer: string;
}) {
	return (
		<div className="flex my-2">
			<TextBox
				letter={word[0]}
				answerLetter={answer[0]}
				answer={answer}
			/>
			<TextBox
				letter={word[1]}
				answerLetter={answer[1]}
				answer={answer}
			/>
			<TextBox
				letter={word[2]}
				answerLetter={answer[2]}
				answer={answer}
			/>
			<TextBox
				letter={word[3]}
				answerLetter={answer[3]}
				answer={answer}
			/>
			<TextBox
				letter={word[4]}
				answerLetter={answer[4]}
				answer={answer}
			/>
		</div>
	);
}

import mongoose, { Document, model, Schema } from 'mongoose';

const CrosswordSchema = new Schema<CrosswordInterface>({
	date: { type: Date, required: true },
	title: { type: String, required: true },
	solution: [[String]],
	clues: {
		Across: [[Schema.Types.Mixed]],
		Down: [[Schema.Types.Mixed]],
	},
	// Screw it, I'm just going to use Mixed
	puzzle: [[Schema.Types.Mixed]],
});

interface CrosswordInterface extends Document {
	date: Date;
	title: string;
	solution: string[][];
	clues: {
		Across: Array<[number, string]>;
		Down: Array<[number, string]>;
	};
	puzzle: Array<
		[{ cell: number; style: { shapebg: string } } | number | string]
	>;
}

export const Crossword =
	mongoose.models.Crossword || model('Crossword', CrosswordSchema);

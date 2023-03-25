import mongoose, { Document, Model, model, Schema } from 'mongoose';

const UserSchema = new Schema({
	name: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	emailVerified: { type: Boolean, default: null },
	today: { type: Boolean, default: false },
	completed: { type: Number, default: 0 },
	timeToday: { type: Number },
});

interface UserInterface extends Document {
	username: string;
	email: string;
	emailVerified: boolean;
	today: boolean;
	completed: number;
	timeToday: number;
}

export const User =
	(mongoose.models.User as Model<UserInterface>) ||
	model<UserInterface>('User', UserSchema);

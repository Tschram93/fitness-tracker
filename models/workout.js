const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
	day: {
		type: Date,
		default: Date.now,
		required: "Enter a date to continue."
	},
	exercises: [
		{
				"_id": false,
				type: {
					type: String
				},
			type: {
				type: String,
				trim: true,
				required: 'Select a type for your exercise',
			},
			name: {
				type: String,
				trim: true,
				required: 'Enter a name for your exercise',
			},
			weight: {
				type: Number,
			},
			sets: {
				type: Number,
			},
			reps: {
				type: Number,
			},
			duration: {
				type: Number,
			},
			distance: {
				type: Number,
			},
		},
	],
});

workoutSchema.virtual('Duration').get(function () {
	let totalTime = 0;
	this.exercises.forEach((exercise) => {
		totalTime += exercise.duration;
	});
	return totalDuration;
});

const Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout;

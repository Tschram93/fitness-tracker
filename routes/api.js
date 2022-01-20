const router = require('express').Router();
const Workout = require('../models/workout');

// GET workouts
router.get('/api/workouts', (req, res) => {
	Workout.aggregate([
		{
			$addFields: {
				totalDuration: { $sum: '$exercises.duration' },
			},
		},
	])
		.sort({ date: -1 })
		.then((lastWorkout) => {
			res.json(lastWorkout);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});


// PUT
router.put('/api/workouts/:id', async (req, res) => {
	const newID = req.params.id;
	if (req.body.exercise.type === 'resistance') {
		try {
			//if resistance exercise is selected send success code
			res.status(200).json(
				await Workout.updateOne(
					{ newID },
					{
						$push: {
							exercises: {
								type: exercise.type,
								name: exercise.name,
								weight: exercise.weight,
								duration: exercise.duration,
								sets: exercise.sets,
								reps: exercise.reps,
							},
						},
					}
				)
			);
		} catch (err) {
			res.status(500).json(err);
		}
	}
});

// POST workouts

// module.exports = router;

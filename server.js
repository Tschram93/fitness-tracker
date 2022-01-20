const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const Workout = require('./models/workout');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
	useNewUrlParser: true,
});

require("./routes/api.js")(app);
require("./routes/api-html.js")(app);

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});

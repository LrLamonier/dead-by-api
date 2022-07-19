const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

process.on("uncaughtException", (err) => {
	server.close(() => {
		process.exit(1);
	});
});

dotenv.config({ path: "./config.env" });

mongoose
	.connect(process.env.DATABASE, {})
	.then(() => console.log("Database online!"));

const port = process.env.PORT || 80;

const server = app.listen(port, () => {
	console.log(`App running on port ${port}...`);
});

process.on("unhandledRefection", (err) => {
	server.close(() => {
		process.exit(1);
	});
});

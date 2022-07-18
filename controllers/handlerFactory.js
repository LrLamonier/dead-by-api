const catchAsync = require("./../utils/catchAsync");
const APIFeatures = require("./../utils/apiFeatures");

exports.getAll = (Model) =>
	catchAsync(async (req, res, next) => {
		const query = new APIFeatures(Model.find(), req.query).limitFields();

		const document = await query.query;

		if (document.length === 0) {
			return res.status(404).json({
				status: "fail",
				message: `The Entity couldn't find that!`,
			});
		}

		res.status(200).json({
			status: "success",
			results: document.length,
			data: document,
		});
	});

exports.getOne = (Model, codeName) =>
	catchAsync(async (req, res, next) => {
		let query;
		if (req.query.fields) {
			query = req.query.fields.split(",").join(" ");
		} else {
			query = "-__v";
		}

		let codeFieldName = { code: req.params.code };
		if (codeName === "killerCode") {
			codeFieldName = { killerCode: req.params.code };
		}

		const document = await Model.find(codeFieldName).select(query);

		if (document.length === 0) {
			return res.status(404).json({
				status: "fail",
				message: `The Entity couldn't find that!`,
			});
		}

		res.status(200).json({
			status: "success",
			data: document,
		});
	});

exports.getRandom = (Model, number) =>
	catchAsync(async (req, res, next) => {
		const document = await Model.aggregate([
			{
				$sample: { size: number },
			},
		]);

		if (document.length === 0) {
			return res.status(404).json({
				status: "fail",
				message: `The Entity couldn't find that!`,
			});
		}

		res.status(200).json({
			status: "success",
			results: document.length,
			data: document,
		});
	});

// to delete
exports.getOneRandom = (Model, number) =>
	catchAsync(async (req, res, next) => {
		const document = await Model.aggregate([
			{
				$sample: { size: number },
			},
		]);

		if (document.length === 0) {
			return res.status(404).json({
				status: "fail",
				message: `The Entity couldn't find that!`,
			});
		}

		res.status(200).json({
			status: "success",
			results: document.length,
			data: document,
		});
	});

exports.getOnesPerks = (Model, type) => async (req, res, next) => {
	let code;
	if (type === "survivor") code = { survivorCode: req.params.code };
	if (type === "killer") code = { killerCode: req.params.code };

	let query;
	if (req.query.fields) {
		query = req.query.fields.split(",").join(" ");
	} else {
		query = "-__v";
	}

	const document = await Model.find(code).select(query);

	if (document.length === 0) {
		return res.status(404).json({
			status: "fail",
			message: `The Entity couldn't find that!`,
		});
	}

	res.status(200).json({
		status: "success",
		data: document,
	});
};

exports.getAddons = (Model, type) => async (req, res, next) => {
	let code = {};

	if (type === "killer") {
		code = { killerCode: req.params.code };
	}
	if (type === "item") {
		code = { itemType: req.params.code };
	}

	let query;
	if (req.query.fields) {
		query = req.query.fields.split(",").join(" ");
	} else {
		query = "-__v";
	}

	const document = await Model.find(code).select(query);

	if (document.length === 0) {
		return res.status(404).json({
			status: "fail",
			message: `The Entity couldn't find that!`,
		});
	}

	res.status(200).json({
		status: "success",
		results: document.length,
		data: document,
	});
};

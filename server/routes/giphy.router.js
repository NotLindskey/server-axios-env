const express = require("express");
const router = express.Router();
const axios = require("axios");

require("dotenv").config();

router.get("/", (req, res) => {
	console.log("inside get route");
	axios
		.get(
			`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}&limit=2&rating=pg`
		)
		.then((response) => {
			res.send(response.data);
		})
		.catch((error) => {
			console.log("error", error);
		});
});
module.exports = router;

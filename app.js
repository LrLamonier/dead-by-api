const express = require("express");
const rateLimit = require("express-rate-limit");
const killerRouter = require("./routes/killerRoutes");
const survRouter = require("./routes/survRoutes");
const itemRouter = require("./routes/itemRoutes");
const perkRouter = require("./routes/perkRoutes");

const app = express();

const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests to the Entity! Try again later!",
});
app.use("/api", limiter);

app.use("/api/v1/killers", killerRouter);
app.use("/api/v1/survs", survRouter);
app.use("/api/v1/items", itemRouter);
app.use("/api/v1/perks", perkRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "not found",
    message: `The Entity could not find ${req.originalUrl} on its realms!`,
  });
});

module.exports = app;

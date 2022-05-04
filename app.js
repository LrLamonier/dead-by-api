const express = require("express");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const killerRouter = require("./routes/killerRoutes");
const survRouter = require("./routes/survRoutes");
const itemRouter = require("./routes/itemRoutes");
const perkRouter = require("./routes/perkRoutes");

const app = express();

app.use(compression());

const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests to the Entity! Try again later!",
});
app.use("/api", limiter);

app.use("/api/killers", killerRouter);
app.use("/api/survs", survRouter);
app.use("/api/items", itemRouter);
app.use("/api/perks", perkRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "not found",
    message: `The Entity could not find ${req.originalUrl} on its realms!`,
  });
});

module.exports = app;

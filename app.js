const express = require("express");
const router = require("./src/routes/api");
const app = new express();

// Security middleware import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

// Security middleware implementation
app.use(helmet());
app.use(mongoSanitize());
app.use(xssClean());
app.use(hpp());
app.use(cors());

// Request limiter implementation
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(limiter);

// api route declaration with version
app.use("/api/v1", router);

// Undefined route
app.use("*", (req, res) => {
  res.status(404).json({
    status: "failed",
    dtata: "Not found!",
  });
});

module.exports = app;

import express, { json, static } from "express";
const app = express();
import cookieParser from "cookie-parser";
import { urlencoded } from "body-parser";
import fileUpload from "express-fileupload";
import { join, resolve } from "path";

import errorMiddleware from "./middleware/error";

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
import product from "./routes/productRoute";
import user from "./routes/userRoute";
import order from "./routes/orderRoute";
import payment from "./routes/paymentRoute";

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(static(join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

export default app;

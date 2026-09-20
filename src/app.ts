import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import httpStatus from "http-status";
import type { Application, Request, Response } from "express";
import config from "./config";
import { prisma } from "./lib/prisma";
import bcrypt from "bcryptjs";
import { userRoutes } from "./module/user/user.route";

const app: Application = express();

// middleware
app.use(
  cors({
    origin: config.app_url,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/api/user", userRoutes);

export default app;

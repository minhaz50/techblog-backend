import { type NextFunction, type Request, type Response } from "express";
import httpStatus from "http-status";
import { userService } from "./user.service";
import { catchAsycn } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const registerUser = catchAsycn(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;

    const user = await userService.registerUserIntoDB(payload);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "User registered succfully.",
      data: { user },
    });
  },
);

export const userController = { registerUser };

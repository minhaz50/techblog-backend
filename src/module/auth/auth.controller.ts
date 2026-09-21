import type { NextFunction, Request, Response } from "express";
import { catchAsycn } from "../../utils/catchAsync";
import { authService } from "./auth.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

const loginUser = catchAsycn(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;

    const result = await authService.loginUser(payload);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "User login successfully.",
      data: result,
    });
  },
);

export const authController = {
  loginUser,
};

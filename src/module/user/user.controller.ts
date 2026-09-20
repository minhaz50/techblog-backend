import { type NextFunction, type Request, type Response } from "express";
import httpStatus from "http-status";
import { userService } from "./user.service";
import { catchAsycn } from "../../utils/catchAsync";

const registerUser = catchAsycn(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;

    const user = await userService.registerUserIntoDB(payload);

    res.status(httpStatus.CREATED).json({
      success: true,
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: "User Registerd Successfully.",
      data: {
        user,
      },
    });
  },
);

export const userController = { registerUser };

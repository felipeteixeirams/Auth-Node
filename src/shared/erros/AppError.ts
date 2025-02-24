import { ErrorCodes } from "@shared/enum/ErrorCodes";
import type { StatusCodes } from "@shared/enum/StatusCodes";

export class AppError extends Error {
	public readonly statusCode: StatusCodes;
	public readonly errorCode: ErrorCodes;
	public readonly stack?: string;

	constructor(message: string, statusCode: StatusCodes, errorCode = ErrorCodes.BAD_REQUEST, stack?: string) {
		super(message);
		this.statusCode = statusCode;
		this.errorCode = errorCode;

		stack ? this.stack = stack : Error.captureStackTrace(this, this.constructor);

		Object.setPrototypeOf(this, new.target.prototype);
	}
}
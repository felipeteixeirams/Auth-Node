import { ErrorCodes } from '@shared/enum/ErrorCodes';
import { ErrorMessages } from '@shared/enum/ErrorMessages';
import { StatusCodes } from '@shared/enum/StatusCodes';
import { AppError } from '@shared/erros/AppError';
import bcrypt from 'bcrypt';

const saltRounds = 10;

export async function hashPassword(password: string): Promise<string> {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    throw new AppError(
      ErrorMessages.ERROR_CREATING_USER,
      StatusCodes.Status500InternalServerError,
      ErrorCodes.INTERNAL_SERVER_ERROR);
  }
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    throw new AppError('Error ao verificar a senha', StatusCodes.Status400BadRequest);
  }
}
import validator from 'validator';
import { EmailValidator } from '~/application/ports/validators/email-validator';

export class EmailValidatorAdapter implements EmailValidator {
  async isValid(email: string): Promise<boolean> {
    return validator.isEmail(email);
  }
}

import { ForgotPasswordGetters } from '@vue-storefront/core';
import { TODO } from '../types';
// import type { PasswordResetResult } from '@vue-storefront/<% INTEGRATION %>-api';
type PasswordResetResult = TODO
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getResetPasswordToken(result: PasswordResetResult): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isPasswordChanged(result: PasswordResetResult): boolean {
  return result === true;
}

export const forgotPasswordGetters: ForgotPasswordGetters<PasswordResetResult> = {
  getResetPasswordToken,
  isPasswordChanged
};

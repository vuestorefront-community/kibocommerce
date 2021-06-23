import { UserGetters } from '@vue-storefront/core';
import type { User } from '@vue-storefront/kibo-api';

// import { User } from '../types/GraphQL';

export const getUserFirstName = (user: any): string => user?.firstName || '';

export const getUserLastName = (user: any): string => user?.lastName || '';

export const getUserFullName = (user: any): string => user ? `${user.firstName} ${user.lastName}` : '';

export const getUserEmailAddress = (user: any): string => user?.email || '';

const userGetters: UserGetters<any> = {
  getFirstName: getUserFirstName,
  getLastName: getUserLastName,
  getFullName: getUserFullName,
  getEmailAddress: getUserEmailAddress
};

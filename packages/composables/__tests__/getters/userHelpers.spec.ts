import { User } from '../../src/types';
import {
  getUserFirstName,
  getUserLastName,
  getUserFullName,
  getUserEmailAddress
} from './../../src/getters/userGetters';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  emailAddress: 'test@email.com'
} as User;

describe('[Kibo-getters] user getters', () => {
  it('returns default values', () => {
    expect(getUserFirstName(null)).toBe('');
    expect(getUserLastName(null)).toBe('');
    expect(getUserFullName(null)).toBe('');
    expect(getUserEmailAddress(null)).toBe('');
  });

  it('returns first name', () => {
    expect(getUserFirstName(user)).toBe('John');
  });

  it('returns last name', () => {
    expect(getUserLastName(user)).toBe('Doe');
  });

  it('returns full name', () => {
    expect(getUserFullName(user)).toBe('John Doe');
  });

  it('returns email address', () => {
    expect(getUserEmailAddress(user)).toBe('test@email.com');
  });
});

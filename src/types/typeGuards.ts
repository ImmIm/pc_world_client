import { Category, UserInfo } from './types';

export function isUserInfo(user: any): user is UserInfo {
  return (user as UserInfo) !== undefined;
}

export function isCategoryArray(arr: any): arr is Category[] {
  return (arr as Category[]) !== undefined;
}

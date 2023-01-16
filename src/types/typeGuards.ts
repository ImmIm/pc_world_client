import { Category, Filter, UserInfo } from './types';

export function isUserInfo(user: any): user is UserInfo {
  return (user as UserInfo) !== undefined;
}

export function isCategoryArray(arr: any): arr is Category[] {
  return (arr as Category[]) !== undefined;
}


export function isCategory(obj: any): obj is Category {
  return (obj as Category) !== undefined;
}
export function isFilter(obj: any): obj is Filter[] {
  return (obj as Filter[]) !== undefined
}

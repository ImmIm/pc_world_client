import { isFilterOptions } from '../../types/typeGuards';
import { FilterOptions } from '../../types/types';

const getCheckboxOptionsNames = (options: FilterOptions) => {
  if (!isFilterOptions(options)) {
    return [];
  }

  const res: string[] = [];
  for (const el of options) {
    if (Number.isNaN(Number(el.data[0])) && el.optionName !== 'price') {
      res.push(el.optionName);
    }
  }

  return res.length === 0 ? [] : res;
};

const getCheckboxOptions = (options: FilterOptions) => {
    if (!isFilterOptions(options)) {
      return [];
    }
  
    const res = [];
    for (const el of options) {
      if (Number.isNaN(Number(el.data[0])) && el.optionName !== 'price') {
        res.push(el);
      }
    }
  
    return res.length === 0 ? [] : res;
  };

const getSliderOptionsNames = (options: FilterOptions) => {
  if (!isFilterOptions(options)) {
    return [];
  }

  const res = [];
  for (const el of options) {
    if (!Number.isNaN(Number(el.data[0])) && el.optionName !== 'price') {
      res.push(el.optionName);
    }
  }

  return res.length === 0 ? [] : res;
};

const getSliderOptions = (options: FilterOptions) => {
    if (!isFilterOptions(options)) {
      return [];
    }
  
    const res = [];
    for (const el of options) {
      if (!Number.isNaN(Number(el.data[0])) && el.optionName !== 'price') {
        res.push(el);
      }
    }
  
    return res.length === 0 ? [] : res;
  };

const getOptionsNames = (options: FilterOptions) => {
  if (!isFilterOptions(options)) {
    return [];
  }

  const res = [];

  for (const el of options) {
    res.push(el.optionName);
  }

  return res.length === 0 ? [] : res;
};

const filterFEUtils = {
  getCheckboxOptionsNames,
  getSliderOptionsNames,
  getOptionsNames,
  getSliderOptions,
  getCheckboxOptions
};

export default filterFEUtils;

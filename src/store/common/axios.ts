import { AxiosOptions } from './types';

export const getOptions = (options: AxiosOptions) => {
  return {
    url: options.url,
    data: options.data || null,
    json: options.json || true,
    headers: options.headers || {},
    method: options.method || 'get',
  };
};

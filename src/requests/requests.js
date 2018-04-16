
import { CONFIG } from '../config/api.config';

export default async function (path, method, args, headers): Promise {
  try {
    console.log('path', path);
    console.log('method', method);
    console.log('args', args);
    console.log('headers', headers);
    const response = await fetch(`${CONFIG.API_URL}${path}`, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
      body: (args && method !== 'delete' && method !== 'get') ? JSON.stringify(args) : undefined,
    });
    return response.text().then((text) => {
      let parsed = null;
      console.log('server response', response);

      if (response.status !== 200 || !response.ok) {
        throw {
          message: response._bodyText,
          code: response.status,
        };
      }
      try {
        parsed = JSON.parse(text);
      } catch(e) {
        parsed = {};
      }

      return parsed;
    });
  } catch(error) {
    console.warn('SERVER_ERROR: ', error);
    return {
      type: 'SERVER_ERROR',
      ...error,
    };
  }
}



const env = 'mock'; // dev, staging, prod, mock
let endpoints = {
  search: '/data/search.json',
};

if(env === 'dev') {
  endpoints = {
    search: '',
  };
} else if(env === 'staging') {
  endpoints = {
    search: '',
  };
} else if(env === 'prod') {
  endpoints = {
    search: '',
  };
}

export {
  endpoints
};

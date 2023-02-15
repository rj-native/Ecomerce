import axios from 'axios';

export const request = async ({
  url,
  method = 'get',
  data = {},
  params = null,
}) => {
  const queryString = params ? params : '';
  const res = await axios({
    method,
    url: `${url}`,
    data: data,
    params: queryString,
  });

  if (res.status === 400) {
    console.log(res.data.message);
    return false;
  }
  if (res.status === 401) {
    console.log(res.data.message);
    return false;
  }
  const response = res?.data;
  console.log('response', response);
  return response;
};

import store from '@/store/index';

export function setInterceptors(instance) {
  // Add a request interceptor
  // ⭐ 요청했을 때 인터셉터 ⭐
  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // ⭐ 보내기 전에 ⭐
    config.headers.Authorization = store.state.token;
    return config;
  }, function (error) {
    // Do something with request error
    // ⭐ 보냈을 때 ⭐
    return Promise.reject(error);
  });
  
  // Add a response interceptor
  instance.interceptors.response.use(function (response) {
    // Do something with response data
    // ⭐ 받기 전에 ⭐
    return response;
  }, function (error) {
    // Do something with response error
    // ⭐ 받았을 때 ⭐
    return Promise.reject(error);
  });
  return instance;
}
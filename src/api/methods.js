import instance from "./instance";

export const httpGet = (url) => {
  return instance.get(url);
};
export const httpPost = (url, data) => {
  return instance.post(url, data);
};
export const httpPut = (url, data) => {
  return instance.put(url, data);
};
export const httpDelete = (url) => {
  return instance.delete(url);
};

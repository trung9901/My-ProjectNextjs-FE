import useSWR from "swr";
import * as methods from "../api/methods";

const enpoints = "/products";
export const useProducts = () => {
  const { data, error, mutate } = useSWR(enpoints, methods.httpGet);
  const createProduct = async (product) => {
    const res = await methods.httpPost(enpoints, product);
    mutate([...data, res]);
  };
  const updateProduct = async (id, data) => {
    const res = await methods.httpPut(`${enpoints}/${id}`, data);
    mutate(data.map((product) => (product.id === id ? res : product)));
  };
  const deleteProduct = async (id) => {
    await methods.httpDelete(`${enpoints}/${id}`);
    mutate(data.filter((product) => product.id !== id));
  };
  return { data, error, createProduct, updateProduct, deleteProduct };
};

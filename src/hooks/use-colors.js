import useSWR from "swr";
import * as methods from "../api/methods";

const enpoints = "/colors";
export const useProducts = () => {
  const { data, error, mutate } = useSWR(enpoints, methods.httpGet);
  const createColor = async (product) => {
    const res = await methods.httpPost(enpoints, product);
    mutate([...data, res]);
  };
  const updateColor = async (id, data) => {
    const res = await methods.httpPut(`${enpoints}/${id}`, data);
    mutate(data.map((product) => (product.id === id ? res : product)));
  };
  const deleteColor = async (id) => {
    await methods.httpDelete(`${enpoints}/${id}`);
    mutate(data.filter((product) => product.id !== id));
  };
  return { data, error, createColor, updateColor, deleteColor };
};

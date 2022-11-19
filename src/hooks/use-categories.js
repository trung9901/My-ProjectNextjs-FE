import useSWR from "swr";
import * as methods from "../api/methods";

const enpoints = "/category";
const useCategories = () => {
  const { data, error, mutate } = useSWR(enpoints, {
    refreshInterval: 3000,
  });
  const createCategory = async (item) => {
    const res = await methods.httpPost(enpoints, item);
    mutate([...data, res]);
  };
  const updateCategory = async (id, item) => {
    const res = await methods.httpPut(`${enpoints}/${id}`, item);
    mutate(data.map((items) => (items.id === id ? res : items)));
  };
  const deleteCategory = async (id) => {
    await methods.httpDelete(`${enpoints}/${id}`);
    mutate(data.filter((items) => items.id !== id));
  };
  return { data, error, createCategory, updateCategory, deleteCategory };
};
export default useCategories;

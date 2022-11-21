import * as methods from "../api/methods";
import useSWR from "swr";
const enpoints = "/size";
const useSize = () => {
  const { data, error, mutate } = useSWR(enpoints, {
    refreshInterval: 3000,
  });
  const createSize = async (product) => {
    const res = await methods.httpPost(enpoints, product);
    mutate([...data, res]);
  };
  const updateSize = async (id, item) => {
    const res = await methods.httpPut(`${enpoints}/${id}`, item);
    mutate(data.map((product) => (product.id === id ? res : product)));
  };
  const deleteSize = async (id) => {
    await methods.httpDelete(`${enpoints}/${id}`);
    mutate(data.filter((product) => product.id !== id));
  };
  return { data, error, createSize, updateSize, deleteSize };
};
export default useSize;

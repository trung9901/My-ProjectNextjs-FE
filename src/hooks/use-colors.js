import useSWR from "swr";
import * as methods from "../api/methods";

const enpoints = "/colors";
const useColor = () => {
  const { data, error, mutate } = useSWR(enpoints, { refreshInterval: 3000 });
  const createColor = async (product) => {
    const res = await methods.httpPost(enpoints, product);
    mutate([...data, res]);
  };
  const updateColor = async (id, item) => {
    const res = await methods.httpPut(`${enpoints}/${id}`, item);
    mutate(data.map((product) => (product.id === id ? res : product)));
  };
  const deleteColor = async (id) => {
    await methods.httpDelete(`${enpoints}/${id}`);
    mutate(data.filter((product) => product.id !== id));
  };
  return { data, error, createColor, updateColor, deleteColor };
};
export default useColor;

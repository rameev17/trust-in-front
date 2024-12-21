import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { toast } from "react-toastify";

const getShop = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/shop/shop-items/`
  );
  return data;
};

export const useGetShop = () => {
  return useQuery(["shop"], getShop);
};

const createOrder = async ({ itemId, name, phoneNumber }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/shop/create-order/`,
    {
      id: itemId,
      name,
      phoneNumber,
    }
  );
  return response.data;
};

export const useCreateOrder = () => {
  return useMutation(createOrder, {
    onSuccess: () => {
      toast.success("Заказ выполнен");
    },
    onError: (error) => {
      toast.error(
        `Error: ${error.response ? error.response.data.detail : error.message}`
      );
    },
  });
};

import { useQuery } from "react-query";
import axios from "axios";

const getSubscription = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/subscription/subscription-plans/`
  );
  return data;
};

export const useGetSubscription = () => {
  return useQuery(["subscription"], getSubscription);
};

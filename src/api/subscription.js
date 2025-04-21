import { useQuery, useMutation } from "react-query";
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

const postSubscription = async ({ planId, formData }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/subscription/increment-subscription/${planId}/`,
    // `http://localhost:8000/backend/subscription/increment-subscription/${planId}/`,

    formData
  );
  return response.data;
};

export const useSubscribe = () => {
  return useMutation({
    mutationFn: postSubscription,
  });
};

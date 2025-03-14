import { useQuery } from "react-query";
import axios from "axios";

const getStatistics = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/trustIn/statistics/`
  );
  return data;
};

export const useGetStatistics = () => {
  return useQuery(["statistics"], getStatistics);
};

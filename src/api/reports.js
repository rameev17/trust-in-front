import { useQuery } from "react-query";
import axios from "axios";

const getReports = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/trustIn/reports-grouped/`
  );
  return data;
};

export const useGetReports = () => {
  return useQuery(["reports"], getReports);
};

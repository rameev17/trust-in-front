import { useQuery } from "react-query";
import axios from "axios";

const getSponsors = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/trustIn/sponsors/`
  );
  return data;
};

export const useGetSponsors = () => {
  return useQuery(["sponsors"], getSponsors);
};

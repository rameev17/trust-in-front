import { useQuery } from "react-query";
import axios from "axios";

const getTeam = async (locale = "kz") => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/team/`,
    {
      params: {
        locale,
      },
    }
  );
  return data;
};

export const useGetTeam = (locale = "kz") => {
  return useQuery(["team", locale], () => getTeam(locale));
};

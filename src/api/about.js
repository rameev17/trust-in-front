import { useQuery } from "react-query";
import axios from "axios";

const getAbout = async (locale = "kz") => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/about/`,
    {
      params: {
        locale,
      },
    }
  );
  return data;
};

export const useGetAbout = (locale = "kz") => {
  return useQuery(["about", locale], () => getAbout(locale));
};

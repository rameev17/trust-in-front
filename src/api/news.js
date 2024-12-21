import { useQuery } from "react-query";
import axios from "axios";

const getNewsById = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/trustIn/news/`,
    { params: { id } }
  );
  return data;
};

export const useGetNewsById = (id) => {
  return useQuery(["news", id], () => getNewsById(id), {
    enabled: !!id,
  });
};

const getFilteredNews = async ( page = 1, page_size = 10) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/trustIn/news/`,
    {
      params: {  page, page_size: page_size },
    }
  );
  return data;
};

export const useGetFilteredNews = ( page, page_size) => {
  return useQuery(
    ["news-filtered",  page, page_size],
    () => getFilteredNews( page, page_size),
    {
      staleTime: 5000,
    }
  );
};

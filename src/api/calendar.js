import { useQuery } from "react-query";
import axios from "axios";

const getCalendar = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/trustIn/calendar-images/`
  );
  return data;
};

export const useGetCalendar = () => {
  return useQuery(["calendar"], getCalendar);
};

const getYearCalendar = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/trustIn/calendar-year/`
  );
  return data;
};

export const useGetYearCalendar = () => {
  return useQuery(["year_calendar"], getYearCalendar);
};

import { useMutation, useQuery } from "react-query";
import axios from "axios";

import { toast } from "react-toastify";

const getVacansy = async (page, page_size) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/trustIn/vacancies/`,
    {
      params: {
        page,
        page_size,
      },
    }
  );
  return data;
};

export const useGetVacansy = (page, page_size) => {
  return useQuery(
    ["vacancies", page, page_size],
    () => getVacansy(page, page_size),
    {
      keepPreviousData: true,
    }
  );
};

const createVacancy = async ({
  position,
  company_info,
  candidate_requirements,
  responsibilities,
  conditions,
  contact_info,
}) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/trustIn/vacancies/`, // Replace with your actual endpoint
    {
      position,
      company_info,
      candidate_requirements,
      responsibilities,
      conditions,
      contact_info,
    }
  );
  return response.data;
};

export const useCreateVacancy = () => {
  return useMutation(createVacancy, {
    onSuccess: () => {
      toast.success("Вакансия успешно добавлена!");
    },
    onError: (error) => {
      toast.error(
        `Ошибка: ${error.response ? error.response.data.detail : error.message}`
      );
    },
  });
};

const getVacansyById = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/trustIn/vacancies/`,
    { params: { id } }
  );
  return data;
};

export const useGetVacansyById = (vacancyId) => {
  return useQuery(["vacancy", vacancyId], () => getVacansyById(vacancyId), {
    enabled: !!vacancyId,
  });
};

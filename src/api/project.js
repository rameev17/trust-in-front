import { useQuery } from "react-query";
import axios from "axios";

const getProjects = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/projects/active-projects/`
  );
  return data;
};

export const useGetProjects = () => {
  return useQuery(["projects"], getProjects);
};
const getProjectById = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/projects/projects/`,
    { params: { id } }
  );
  return data;
};

export const useGetProjectById = (id) => {
  return useQuery(["project", id], () => getProjectById(id), {
    enabled: !!id,
  });
};

const getFilteredProjects = async (status, page = 1, pageSize = 10) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/projects/projects/`,
    {
      params: { status, page, page_size: pageSize },
    }
  );
  return data;
};

export const useGetFilteredProjects = (status, page, pageSize) => {
  return useQuery(
    ["projects-filtered", status, page, pageSize],
    () => getFilteredProjects(status, page, pageSize),
    {
      staleTime: 5000,
    }
  );
};

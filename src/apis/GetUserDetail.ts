import http from "../utils/httpService";

export const onfetchUserDetail = async (request: any) => {
  const result = await http.get(`/api`, {
    params: { ...request },
  });
  return result.data?.results;
};

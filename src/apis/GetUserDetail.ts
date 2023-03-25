import http from "../utils/httpService";

export const onfetchUserDetail = async (request: any) => {
    const result = await http.get(`/api`,{
      params: { ...request }
    });
    // console.log("vvv",result.data?.results)
    return result.data?.results;
  };
  
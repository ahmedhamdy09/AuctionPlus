import baseURL from "../Api/baseURL";

const useDeleteData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`},
  };

  const res = await baseURL.delete(url, params, config);

  return res;
};

export default useDeleteData;

import baseURL from "../Api/baseURL";

const useGetDataToken = async (url) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  const res = await baseURL.get(url, config);

  return res.data;
};

export default useGetDataToken;


import baseURL from "../Api/baseURL";

const useUpdateDataWithImages = async (url, params) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  const res = await baseURL.put(url, params, config);
  console.log(res.status);
  return res;
};

const useUpdateData = async (url, params) => {
  const res = await baseURL.put(url, params);

  return res;
};

export { useUpdateDataWithImages, useUpdateData };

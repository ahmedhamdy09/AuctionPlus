import baseURL from "../Api/baseURL";

const useInsertDataWithImages = async (url, params) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  const res = await baseURL.post(url, params, config);
  console.log(res.status);
  return res;
};

const useInsertData = async (url, params) => {
  const res = await baseURL.post(url, params);

  return res;
};

export { useInsertDataWithImages, useInsertData };

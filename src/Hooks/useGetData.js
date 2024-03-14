import baseURL from "../Api/baseURL";

const useGetData = async (url, params) => {
  const res = await baseURL.get(url, params);

  return res.data;
};

export default useGetData;

// import baseURL from "../Api/baseURL";

// const useGetData = async (url, params) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//     params: params, // إذا كان هناك استعلامات URL يجب إضافتها هنا
//   };

//   const res = await baseURL.get(url, config);
//   return res.data;
// };

// export default useGetData;

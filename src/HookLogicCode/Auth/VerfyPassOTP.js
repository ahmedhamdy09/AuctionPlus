// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { verfiyOtp } from "../../Redux/Actions/AuthAction";
// import notify from "../useNotifaction";

// const VerifyOTP = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [code, setCode] = useState("");
//   const [loading, setLoading] = useState(true);

//   const onChangeCode = (e) => {
//     setCode(e.target.value);
//   };

//   const onSubmit = async () => {
//     if (code === "") {
//       notify("please insert your code", "error");
//       return;
//     }
//     setLoading(true);

//     await dispatch(verfiyOtp({
// resetCode: code,
// }));
//     setLoading(false);
//   };

//   const res = useSelector((state) => state.authReducer.verifyOtp);

//   useEffect(
//     () => {
//       if (loading === false) {
//         if (res) {
//           console.log(res);
//             if (res.data.status === "success") {
//               notify("the code otp is sending to email", "success");
//               setTimeout(() => {
//                 navigate("/popupnewpass");
//               }, 1000);
//             }
//             if (res.data.status === "fail") {
//               notify("the code otp is failure sending", "error");
//             }
//         }
//       }
//     },
//     // eslint-disable-next-line
//     [loading]
//   );
//   return [onChangeCode, code, onSubmit];
// };

// export default VerifyOTP;

import { useEffect, useState } from "react";

const ProtectedRouteHook = () => {
  // eslint-disable-next-line
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [isUser, setIsUser] = useState();
  const [isAdmin, setIsAdmin] = useState();

  useEffect(
    () => {
      if (userData !== null) {
        if (userData.role === "user") {
          setIsUser(true);
          setIsAdmin(false);
        } else {
          setIsUser(false);
          setIsAdmin(true);
        }
      } else {
        setIsAdmin(false);
        setIsUser(false);
      }
    },
    // eslint-disable-next-line
    []
  );

  return [isUser, isAdmin, userData];
};

export default ProtectedRouteHook;

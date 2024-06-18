import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  generateAgoraToken,
  generateAgoraTokenChat,
  getAllEvents,
} from "../../Redux/Actions/RoomsAction";
import notify from "../useNotifaction";
import { useNavigate } from "react-router-dom";

const GetAllRooms = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      setLoading(true);
      dispatch(getAllEvents());
      setLoading(false);
    },
    // eslint-disable-next-line
    []
  );
  const handleJoin = async (channal, chat) => {
    setLoading(true);
    localStorage.setItem("generateName", channal);
    if (chat === "true") {
      await dispatch(
        generateAgoraTokenChat({
          channel: channal,
        })
      );
      setLoading(false);
    } else if (chat === "false") {
      await dispatch(
        generateAgoraToken({
          channel: channal,
        })
      );
      setLoading(false);
    }
  };
  const generateToken = useSelector(
    (state) => state.roomsReducers.generateAgoratoken
  );
  const generateTokenChat = useSelector(
    (state) => state.roomsReducers.generateAgoratokenChat
  );
  console.log("🚀 ~ GetAllRooms ~ generateToken:", generateToken);

  const res = useSelector((state) => state.roomsReducers.getAllEvents);

  useEffect(
    () => {
      if (loading === false) {
        setTimeout(() => setLoading(true), 1500);
        if (generateToken) {
          if (generateToken.status === 200 || generateToken.status === 201) {
            if (generateToken.data) {
              // notify("event created successfully", "success");
              localStorage.setItem("generateToken", generateToken.data.token);
              // navigate("/upliveone");
              setTimeout(() => {
                navigate("/uplivethree");
              }, 2000);
            }
          } else if (
            generateToken.status !== 200 ||
            generateToken.status !== 201
          ) {
            if (generateToken.data) {
              notify("Error Pleae Try Again", "warn");
            } else {
              notify("Error Pleae Try Again", "warn");
            }
          }
        }

        if (generateTokenChat) {
          if (
            generateTokenChat.status === 200 ||
            generateTokenChat.status === 201
          ) {
            if (generateTokenChat.data) {
              // notify("event created successfully", "success");
              localStorage.setItem(
                "generateToken",
                generateTokenChat.data.token
              );
              // navigate("/upliveone");
              setTimeout(() => {
                navigate("/uplivethree");
              }, 2000);
            }
          } else if (
            generateTokenChat.status !== 200 ||
            generateTokenChat.status !== 201
          ) {
            if (generateTokenChat.data) {
              notify("Error Pleae Try Again", "warn");
            } else {
              notify("Error Pleae Try Again", "warn");
            }
          }
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );
  return [res, handleJoin];
};

export default GetAllRooms;

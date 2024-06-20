import React from "react";
import "./UpplivesShow1.css";
import arrowLeft from "./images/arrow-left-solid.svg";
import celender from "./images/calendar-plus-regular.svg";
import userImg from "./images/user-regular.svg";
import recored from "./images/microphone-solid.svg";
import bell from "./images/bell-regular.svg";
import share from "./images/arrow-up-from-bracket-solid.svg";
import { Link, useNavigate } from "react-router-dom";
import GetAllRooms from "../../HookLogicCode/Rooms/GetAllRooms";
import UserGetAllOrderHook from "../../HookLogicCode/User/UserGetAllOrderHook";

const UppliveShow1 = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [res, handleJoin] = GetAllRooms();
  console.log("🚀 ~ UppliveShow1 ~ res:", res);
  // eslint-disable-next-line
  const [userName, result, paginate, orderData] = UserGetAllOrderHook();

  // const [joined, setJoined] = useState(false);

  return (
    <div className="parentss">
      <div className="containers">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <div className="text-back">
            <img src={arrowLeft} alt="backArrow" className="arrow-back" />
            <p className="text">Upcoming live shows</p>
          </div>
        </Link>
        <Link to={"/uplivetwo"}>
          <div className="scheduleIcon">
            <img
              src={celender}
              alt="schedule"
              className="schedule"
              style={{ cursor: "pointer" }}
            />
          </div>
        </Link>
      </div>
      <div id="local_stream"></div>

      {res &&
        res.map((item) => (
          <div className="sec">
            <Link
              to={`/upliveDetails/${item._id}`}
              style={{ textDecoration: "none", color: "black" }}>
              <div className="p-3 text-dark-emphasis bg-secondary-subtle border border-dark-subtle rounded-3 con">
                {item.hostIds.map((ho) => (
                  <div className="con1">
                    <div className="img">
                      <img src={userImg} alt="user" class="user-img" />
                    </div>
                    <div className="info">
                      <p>{ho.name}</p>
                      <span>Host</span>
                    </div>
                  </div>
                ))}
                {item.userIds.map((us) => (
                  <div className="con1">
                    <div className="img">
                      <img src={userImg} alt="user" class="user-img" />
                    </div>
                    <div className="info">
                      <p>{us.name}</p>
                      <span>user</span>
                    </div>
                  </div>
                ))}

                <div className="micro">
                  <img src={recored} className="recored-icon" alt="recored" />
                </div>
              </div>
            </Link>
            <div className="para3">
              <p className="p1">{item.title}</p>
              <p className="p2">{new Date(item.eventDate).toLocaleString()}</p>
              <p className="p3">
                Waiting room~ <span>{userName}</span>
              </p>

              <div className="buttonss">
                {/* <Link
              to={
                "https://ada6251557bb7a455bb6-ahmedhamdy09s-projects.vercel.app/create"
              }
            >
              {!joined && (
                <button
                  type="button"
                  className="btn btn-info live-btn"
                  onClick={() => {
                    setJoined(true);
                    setTimeout(() => {
                      navigate("/uplivethree");
                    }, 1500);
                  }}
                >
                  Join Now
                </button>
              )}
            </Link> */}
                {/* {!joined && ( */}
                <button
                  type="button"
                  className="btn btn-info live-btn"
                  onClick={() => handleJoin(item.title, item.allowchat)}>
                  Join Now
                </button>
                {/* )} */}
                <button type="button" className="btn btn-secondary remind-btn">
                  <img src={bell} alt="reminder Me" />
                  let Me Know
                </button>

                <button type="button" className="btn btn-light invite-btn">
                  <span>Invite Friends</span>
                  <img src={share} alt="share" />
                </button>
              </div>
            </div>
            <br />
          </div>
        ))}
    </div>
  );
};

export default UppliveShow1;

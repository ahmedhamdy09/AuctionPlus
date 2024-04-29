import React, { useState } from "react";
import "./AgoraCSS/Rooms.css";
import VideosCall from "./VideosCall";
import { Button } from "@material-ui/core";
const Rooms = () => {
  const [inCall, setInCall] = useState(false);
  return (
    <div style={{ height: "100%" }}>
      {inCall ? (
        <VideosCall setInCall={setInCall} />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setInCall(true)}
        >
          Join Rooms
        </Button>
      )}
    </div>
  );
};

export default Rooms;

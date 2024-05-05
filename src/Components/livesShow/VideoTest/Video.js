import React, { useEffect, useRef } from "react";

const Video = ({ user }) => {
  const ref = useRef();

  useEffect(
    () => {
      user.videoTrack.play(ref.current);
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div>
      {/* Uid: {user.uid} */}
      <div ref={ref} style={{ width: "800px", height: "500px" }}></div>
    </div>
  );
};

export default Video;

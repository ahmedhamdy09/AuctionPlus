import React, { useEffect, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { VideoPlayer } from "./videoPlayer";

const APP_ID = "eaa1810d9a4a477d97053548a5ef7819";

export const VideoRoom = ({ res }) => {
  console.log("🚀 ~ VideoRoom ~ res:", res);
  const temp = JSON.parse(localStorage.getItem("user"));
  console.log("🚀 ~ CreateRooms ~ temp:", temp);
  const TOKEN = res?.token;
  const CHANNEL = res?.title;
  const client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
  });
  const [users, setUsers] = useState([]);
  console.log("🚀 ~ VideoRoom ~ users:", users);
  const [localTracks, setLocalTracks] = useState([]);

  const handleUserJoined = async (user, mediaType) => {
    await client.subscribe(user, mediaType);

    if (mediaType === "video") {
      setUsers((previousUsers) => [...previousUsers, user]);
    }

    if (mediaType === "audio") {
      // user.audioTrack.play() && user.
    }
  };

  const handleUserLeft = (user) => {
    setUsers((previousUsers) =>
      previousUsers.filter((u) => u.uid !== user.uid)
    );
  };

  useEffect(() => {
    client.on("user-published", handleUserJoined);
    client.on("user-left", handleUserLeft);

    client
      .join(APP_ID, CHANNEL, TOKEN, null)
      .then((uid) => {
        if (res.ownerId._id === temp._id) {
          return AgoraRTC.createMicrophoneAndCameraTracks().then((tracks) => [
            tracks,
            uid,
          ]);
        }
      })
      .then(([tracks, uid]) => {
        if (res.ownerId._id === temp._id) {
          const [audioTrack, videoTrack] = tracks;
          setLocalTracks(tracks);
          setUsers((previousUsers) => [
            ...previousUsers,
            {
              uid,
              videoTrack,
              audioTrack,
            },
          ]);
          client.publish(tracks);
        }
      })
      .catch((error) => {
        console.error("Error joining channel:", error);
      });

    return () => {
      for (let localTrack of localTracks) {
        localTrack.stop();
        localTrack.close();
      }
      client.off("user-published", handleUserJoined);
      client.off("user-left", handleUserLeft);
      //  client.unpublish(tracks).then(() => client.leave());
    };
  }, 
  // eslint-disable-next-line
  []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="videost"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 200px)",
        }}>
        {users.map((user) => (
          <VideoPlayer key={user.uid} user={user} />
        ))}
      </div>
    </div>
  );
};

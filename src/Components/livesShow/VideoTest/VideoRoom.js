import React, { useEffect, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import Video from "./Video";

const APP_ID = "944f1437c3ea4e15a371a428937454d7";
const TOKEN =
  "007eJxTYLhfcfvhQbarX/eXh9ddY765qjo3j8eDk99OcMKB5unFBloKDJYmJmmGJsbmycapiSaphqaJxuaGiSZGFpbG5iamJinm/WFmaQ2BjAzWvgIsjAwQCOKzMiRm5KamMDAAADiCHWQ=";
const CHANNEL = "ahmed";

const client = AgoraRTC.createClient({
  mode: "rtc",
  codec: "vp8",
});

export const VideoRoom = () => {
  const [users, setUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState([]);

  const handleUserJoined = async (user, mediaType) => {
    await client.subscribe(user, mediaType);

    if (mediaType === "video") {
      setUsers((previousUsers) => [...previousUsers, user]);
    }

    if (mediaType === "audio") {
      // user.audioTrack.play()
    }
  };

  const handleUserLeft = (user) => {
    setUsers((previousUsers) =>
      previousUsers.filter((u) => u.uid !== user.uid)
    );
  };

  useEffect(
    () => {
      client.on("user-published", handleUserJoined);
      client.on("user-left", handleUserLeft);

      client
        .join(APP_ID, CHANNEL, TOKEN, null)
        .then((uid) =>
          Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), uid])
        )
        .then(([tracks, uid]) => {
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
        });

      return () => {
        for (let localTrack of localTracks) {
          localTrack.stop();
          localTrack.close();
        }
        client.off("user-published", handleUserJoined);
        client.off("user-left", handleUserLeft);
        client.unpublish(localTracks).then(() => client.leave());
      };
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div className="vii" style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 200px)",
        }}
      >
        {users.map((user) => (
          <Video key={user.uid} user={user} />
        ))}
      </div>
    </div>
  );
};

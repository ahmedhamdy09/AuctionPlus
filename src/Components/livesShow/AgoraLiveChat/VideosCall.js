// التحكم في كل الفيديوهات الخاصة بينا
// والتأكد من انضمامنا للميتنج
import { useEffect, useState } from "react";
import {
  config,
  useClient,
  useMicrophoneAndCameraTracks,
  channelName,
} from "./Settings";
import { Grid } from "@material-ui/core";
import VideoChat from "./VideoChat";
import Controls from "./Controls";
export default function VideosCall(props) {
  const { setInCall } = props;
  const [users, setUsers] = useState([]);
  const [start, setStart] = useState(false);

  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();

  useEffect(
    () => {
      let init = async (name) => {
        client.on("user-published", async (user, mediaType) => {
          await client.subscribe(user, mediaType);
          if (mediaType === "video") {
            setUsers((prevUsers) => {
              return [...prevUsers, user];
            });
          }
          if (mediaType === "audio") {
            user.audioTrack.play();
          }
        });

        client.on("user-unpublished", async (user, mediaType) => {
          if (mediaType === "audio") {
            if (user.audioTrack) user.audioTrack.stop();
          }
          if (mediaType === "video") {
            setUsers((prevUsers) => {
              return prevUsers.filter((User) => {
                return User.uid !== user.uid;
              });
            });
          }
        });
        client.on("user-left", (user) => {
          setUsers((prevUsers) =>
            prevUsers.filter((User) => User.uid !== user.uid)
          );
        });

        try {
          await client.join(config.appID, name, config.token, null);
        } catch (e) {
          console.log("error");
        }

        if (tracks) await client.publish([tracks[0], tracks[1]]);
        setStart(true);
      };

      if (ready && tracks) {
        try {
          init(channelName);
        } catch (error) {
          console.log(error);
        }
      }
    },
    // eslint-disable-next-line
    [channelName, client, ready, tracks]
  );

  return (
    <Grid container direction="column" style={{ height: "100%" }}>
      <Grid item style={{ height: "5%" }}>
        {ready && tracks && (
          <Controls tracks={tracks} setStart={setStart} setInCall={setInCall} />
        )}
      </Grid>
      <Grid item style={{ height: "95%" }}>
        {start && tracks && <VideoChat tracks={tracks} users={users} />}
      </Grid>
    </Grid>
  );
}

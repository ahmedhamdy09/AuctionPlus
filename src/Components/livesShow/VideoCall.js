import React, { useRef, useEffect, useState } from "react";
import SimplePeer from "simple-peer";

const VideoCall = () => {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const [localStream, setLocalStream] = useState(null);
  // eslint-disable-next-line
  const [remoteStream, setRemoteStream] = useState(null);

  useEffect(() => {
    const startVideoCall = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setLocalStream(stream);
      localVideoRef.current.srcObject = stream;

      const peer = new SimplePeer({ initiator: true, trickle: false });

      peer.on("signal", (data) => {
        // Send signaling data to the other peer
      });

      peer.on("stream", (stream) => {
        setRemoteStream(stream);
        remoteVideoRef.current.srcObject = stream;
      });

      // Example of how you might send signaling data
      // peer.signal(signalingDataFromOtherPeer);
    };

    startVideoCall();

    return () => {
      // eslint-disable-next-line
      localStream && localStream.getTracks().forEach((track) => track.stop());
    };
  },
   // eslint-disable-next-line
  []);

  return (
    <div>
      <video
        ref={localVideoRef}
        autoPlay
        playsInline
        muted
        style={{ width: "50%", height: "50%" }}
      />
      <video
        ref={remoteVideoRef}
        autoPlay
        playsInline
        style={{ width: "50%", height: "50%" }}
      />
    </div>
  );
};

export default VideoCall;

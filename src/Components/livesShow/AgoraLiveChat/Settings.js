import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-sdk";
const appID = "944f1437c3ea4e15a371a428937454d7";

const token =
  "007eJxTYOjwLPJJfJFebeshdDcr2oHpzkvWd/kVLu1ayulVovGHGRQYLE1M0gxNjM2TjVMTTVINTRONzQ0TTYwsLI3NTUxNUswFD+qnNQQyMuhcYWFhZIBAEJ+VITEjNzWFgQEAXtwbZw==";

export const config = { mode: "rtc", codec: "vp8", appID: appID, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "ahmed";

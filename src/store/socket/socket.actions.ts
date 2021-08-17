export const CONNECTION_CHANGED = "CONNECTION_CHANGED";
export const CONNECT_SOCKET = "CONNECT_SOCKET";

export const connectionChangedAC = (isConnected: boolean) => {
  return {
    type: CONNECTION_CHANGED,
    connected: isConnected,
    isError: false,
  };
};

export const connectSocketAC = () => {
  return {
    type: CONNECT_SOCKET,
  };
};

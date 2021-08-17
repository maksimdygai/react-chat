export type Message = {
  from: string;
  content: string;
  time: string;
};

export type MessageToRender = Message & {
  type: string;
};

import { Timestamp } from "./Timestamp.styled";

type TimestampProps = { value: string; floatToRight: boolean };

export const TimestampRaw = ({ value, floatToRight }: TimestampProps) => (
  <Timestamp floatToRight={floatToRight}>{value}</Timestamp>
);

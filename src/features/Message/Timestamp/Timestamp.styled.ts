import { styled } from "../../../theme/theme";

export const Timestamp = styled("div")<{ floatToRight: boolean }>`
  font-size: 0.7em;
  float: ${(props) => (props.floatToRight ? "right" : "left")};
  margin: 7px 0 0 4px;
`;

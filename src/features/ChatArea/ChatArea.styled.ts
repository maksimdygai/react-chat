import { styled } from "../../theme/theme";

export const Container = styled("section")`
  color: ${(props) => props.theme.primaryLightColor};
  background-color: ${(props) => props.theme.secondaryDarkColor};
  display: inline-block;
  position: absolute;
  width: 100%;
  height: calc(100vh - 125px);
  overflow-y: scroll;
  left: 0;

  #nickname-container {
    clear: both;
  }

  /* ----------- Non-Retina Screens ----------- */
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
    overflow-y: hidden;
  }
  /* ----------- Retina Screens ----------- */
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    overflow-y: hidden;
  }
`;

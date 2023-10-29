import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const CopyRight = styled(Typography)`
  min-height: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${ColorPalette.copyRight};
  color: ${ColorPalette.whiteColor};
  font-size: 2rem;
  text-transform: capitalize;
`;

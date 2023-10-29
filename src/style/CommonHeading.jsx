import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const CommonHeading = styled(Typography)`
  display: inline-block;
  align-items: center;
  gap: 5px;
  margin-bottom: 3rem;
  position: relative;
  padding-top: 1rem;
  &::after {
    content: "";
    width: 6rem;
    height: 5px;
    background-color: ${ColorPalette.primaryColor};
    position: absolute;
    left: 0;
    top: 0;
    margin-inline: auto;
  }
  span {
    color: ${ColorPalette.primaryColor};
    display: inline;
  }
`;

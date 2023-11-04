import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const CommonButton = styled(Button)`
  padding-inline: 4rem;
  color: ${ColorPalette.whiteColor};
  box-shadow: none;
  font-size: 1.8rem;
  font-family: "Montserrat", sans-serif;
  text-transform: capitalize;
  font-weight: 600;
  border-radius: 1.9rem;
  min-height: 5.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${ColorPalette.blackColor} !important;
  }
`;

import styled from "@emotion/styled";
import { AppBar, Box } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const HeaderWrapper = styled(AppBar)`
  box-shadow: none;
  border-bottom: 1px solid ${ColorPalette.headerBorderColor};
  padding-block: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .MuiToolbar-regular {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > * {
      flex: 0 0 auto;
    }
  }
  .logo {
    max-width: 260px;
  }
  .navigation {
    display: flex;
    align-items: center;
    column-gap: 5rem;
    text-transform: capitalize;
    a {
      font-size: 1.6rem;
      color: ${ColorPalette.blackColor};
      font-weight: 500;
      &:hover {
        color: ${ColorPalette.primaryColor};
      }
    }
  }
`;

export const HeaderAuth = styled(Box)`
  display: flex;
  align-items: center;
  button,
  a {
    font-size: 1.6rem;
    color: ${ColorPalette.blackColor};
    text-transform: capitalize;
    font-weight: 500;
    min-width: 64px;
    padding: 6px 8px;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    svg {
      margin-left: 5px;
      width: 2rem;
      height: 2rem;
    }
    &:hover {
      background-color: transparent;
      color: ${ColorPalette.primaryColor};
    }
  }
`;

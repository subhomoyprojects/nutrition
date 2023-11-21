import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const CommonBox = styled(Box)`
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  & > * {
    flex: 1;
  }
`;

export const RightBox = styled(Box)`
  display: flex;
  line-height: 0;
  img {
    object-fit: cover;
    width: 100%;
  }
`;

export const LeftBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  .pageGo {
    font-size: 1.6rem;
    margin-top: 1.5rem;
    a {
      color: ${ColorPalette.primaryColor};
      &:hover {
        color: ${ColorPalette.secondaryColor};
      }
    }
  }
`;

export const LeftSideHolder = styled(Box)`
  max-width: 510px;
  padding: 3rem;
  .logoHolder {
    margin-bottom: 2rem;
  }
  .description {
    font-size: 1.6rem;
    color: ${ColorPalette.authSubTitle};
    margin-bottom: 3rem;
  }
`;
export const MiddleContent = styled(Box)`
  .form-group {
    margin-block: 1.3rem;
    display: flex;
    flex-wrap: wrap;
    column-gap: 1.5rem;
    & > div {
      flex: 1;
    }
    label {
      &:not(.MuiFormLabel-root) {
        color: ${ColorPalette.blackColor};
        font-weight: 500;
        margin-bottom: 6px;
        display: block;
        width: 100%;
      }
      &.MuiButton-root {
        display: flex;
        color: ${ColorPalette.whiteColor};
        &:hover {
          background-color: ${ColorPalette.blackColor} !important;
          color: ${ColorPalette.whiteColor} !important;
        }
      }
    }
  }
`;

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

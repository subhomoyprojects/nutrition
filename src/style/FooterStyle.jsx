import styled from "@emotion/styled";
import { Box } from "@mui/material";
import assets from "../assets";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const FooterTop = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  margin-inline: auto;
  transform: translateY(-50%);
  top: -170px;
  background: url(${assets.newsletterDecoration}) no-repeat center;
  background-size: cover;
  h3 {
    text-align: center;

    &::after {
      display: none;
    }
  }
  .newsletterField {
    background-color: ${ColorPalette.whiteColor};
    max-width: 500px;
    margin-inline: auto;
    width: 100%;
    display: flex;
    gap: 1rem;
    .sendButton {
      background-color: ${ColorPalette.lightBlue};
      font-size: 3rem;
      .MuiButton-endIcon {
        margin-left: 0;
      }
      svg {
        width: 3rem;
        height: 3rem;
      }
      &:hover {
        background-color: ${ColorPalette.primaryColor};
      }
    }
  }
`;
export const AgreeBox = styled(Box)`
  max-width: 500px;
  margin-inline: auto;
  width: 100%;
  display: flex;
  margin-top: 2rem;
  .MuiCheckbox-root {
    color: ${ColorPalette.primaryColor};
  }
  .MuiFormControlLabel-label {
    font-size: 1.6rem;
  }
  .css-i4bv87-MuiSvgIcon-root {
    width: 2.7rem;
    height: 2.7rem;
  }
`;

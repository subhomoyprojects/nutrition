import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const TitleHolder = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;
export const ProductListWrapper = styled(Box)`
  padding: 40px 0;
  border-block: 1px solid ${ColorPalette.inputBorderColor};
  background-color: ${ColorPalette.lightOrange};
`;
export const ProductListItem = styled(Grid)`
  .product {
    border: 1px solid ${ColorPalette.inputBorderColor};
    border-radius: 20px;
    padding: 30px 20px;
    text-align: center;
    p {
      font-size: 1.5rem;
    }
    .proImageHolder {
      display: flex;
      width: 100%;
      height: 100%;
      padding: 0;
      align-items: center;
      justify-content: center;
      margin: 0;
      & > * {
        width: 100%;
      }
    }
    button,
    a {
      padding-inline: 2rem;
      font-size: 1.6rem;
      min-height: 4rem;
      border-radius: 1rem;
      line-height: normal;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      margin-inline: 5px;
      border: none;
    }
    a {
      &.update {
        background-color: ${ColorPalette.secondaryColor};
        min-width: auto;
        &:hover {
          background-color: ${ColorPalette.blackColor};
        }
      }
    }
    .MuiCardActions-root {
      justify-content: center;
    }
    .css-muxve-MuiCardMedia-root,
    .css-tmr11v {
      background-size: contain;
    }
  }
`;

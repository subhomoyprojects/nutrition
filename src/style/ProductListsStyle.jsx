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
    button {
      padding-inline: 2rem;
      font-size: 1.6rem;
      min-height: 4rem;
      border-radius: 1rem;
    }
    .MuiCardActions-root {
      justify-content: center;
    }
  }
`;
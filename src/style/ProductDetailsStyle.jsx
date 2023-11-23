import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const ProductDetailsStyle = styled(Box)`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4rem;
  & > * {
    flex: 0 0 auto;
    width: calc((100% / 2) - (4rem - (4rem / 2)));
    &.detailsImageHolder {
      figure {
        img {
          width: 100%;
          object-fit: contain;
          border-radius: 2rem;
        }
      }
    }
    &.detailsContentHolder {
      h3 {
        margin-bottom: 2rem;
      }
      p {
        font-size: 1.6rem;
        margin-bottom: 2rem;
      }
      .createAt {
        font-size: 1.4rem;
        display: inline-flex;
        align-items: center;
        strong {
          margin-right: 1rem;
          color: ${ColorPalette.primaryColor};
        }
      }
    }
  }
`;

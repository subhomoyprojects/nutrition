import styled from "@emotion/styled";
import { Pagination } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const CustomPaginationStyle = styled(Pagination)`
  justify-content: center;
  display: flex;
  margin-top: 3rem !important;
  ul {
    li {
      * {
        font-size: 1.8rem;
        &.MuiPaginationItem-outlined {
          min-width: 4rem;
          height: 4rem;
        }
        &.Mui-selected {
          background-color: ${ColorPalette.primaryColor};
          color: ${ColorPalette.whiteColor};
          border-color: ${ColorPalette.primaryColor};
          pointer-events: none;
        }
        &.MuiPaginationItem-icon {
          font-size: 3rem;
        }
      }
    }
  }
`;

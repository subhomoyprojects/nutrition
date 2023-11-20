import styled from "@emotion/styled";
import { Modal } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const CommonModalStyle = styled(Modal)`
  .modalHolder {
    background-color: ${ColorPalette.whiteColor};
    padding: 3rem;
    min-width: 400px;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${ColorPalette.blackColor};
    position: absolute;
    p {
      font-size: 1.6rem;
      margin-top: 2rem;
      text-align: center;
    }
    .actionBtnHolder {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-top: 3rem;
      button {
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
        &.cancel {
          &:hover {
            background-color: ${ColorPalette.blackColor};
          }
        }
      }
    }
  }
`;

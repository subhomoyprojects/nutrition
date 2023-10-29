import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const CommonInputType = styled(TextField)`
  width: 100%;
  font-size: 1.6rem;
  label {
    font-size: 1.6rem;
  }
  fieldset {
    font-size: 1.6rem;
    border-color: ${ColorPalette.inputBorderColor};
    border-radius: 1rem;
  }
  input {
    font-size: 1.6rem;
  }
`;

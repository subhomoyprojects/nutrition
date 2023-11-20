import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const ProductCreateStyle = styled(Box)`
  padding-block: 6rem;
  form {
    max-width: 600px;
    margin-inline: auto;
  }
  .form-group {
    margin-bottom: 2rem;
    & > label {
      text-align: left;
      color: ${ColorPalette.blackColor};
      font-weight: 500;
      margin-bottom: 6px;
      width: 100%;
      display: block;
    }
  }
`;
export const ProductImageUpload = styled(Box)`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-bottom: 4rem;
  figure {
    position: relative;
    width: 30rem;
    height: 30rem;
    border-radius: 100%;
    border: 7px solid ${ColorPalette.secondaryColor};
    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      object-fit: cover;
    }
  }
  .upload {
    position: absolute;
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    background-color: ${ColorPalette.secondaryColor};
    color: ${ColorPalette.whiteColor};
    bottom: 2rem;
    right: 3.5rem;
    padding: 0;
    min-width: auto;
    min-height: auto;
    display: inline-flex;
    margin-inline: auto;
    .css-1d6wzja-MuiButton-startIcon,
    .css-6xugel {
      margin: 0;
    }
    svg {
      width: 2.5rem;
      height: 2.5rem;
      margin: 0;
    }
  }
  .error {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 1rem;
  }
`;

import { Box, Container } from "@mui/material";
import React from "react";
import { ProductCreateStyle, ProductImageUpload } from "../style/ProductCreateStyle";
import { CloudUpload } from "@mui/icons-material";
import assets from "../assets";
import { CommonButton } from "../style/CommonButton";
import { VisuallyHiddenInput } from "../style/AuthWrapperStyle";
import { ColorPalette } from "../assets/scss/ThemePalet";
import CommonTextField from "../components/CommonTextField";
import CommonTitle from "../components/CommonTitle";

export default function CreateProduct() {
  return (
    <main>
      <section className="productCreateWrapper">
        <Container>
          <CommonTitle title="Create Product" variant="h3" textColor={ColorPalette.blackColor} />
          <ProductCreateStyle>
            <Box className="text-center">
              <ProductImageUpload>
                <figure>
                  <img src={assets.noImage} alt="No Image Available" />
                </figure>
                <CommonButton className="upload" component="label" variant="contained" startIcon={<CloudUpload />} style={{ backgroundColor: `${ColorPalette.secondaryColor}` }}>
                  <VisuallyHiddenInput type="file" />
                </CommonButton>
              </ProductImageUpload>
              <form>
                <Box className="form-group">
                  <label>Title</label>
                  <CommonTextField variant="outlined" label="Enter your Title" />
                </Box>
                <Box className="form-group">
                  <label>Description</label>
                  <CommonTextField variant="outlined" label="Enter your Description" multiline={true} rows={4} />
                </Box>
                <Box className="form-group text-center">
                  <CommonButton fullWidth type="submit" variant="contained" style={{ backgroundColor: `${ColorPalette.primaryColor}` }}>
                    Submit
                  </CommonButton>
                </Box>
              </form>
            </Box>
          </ProductCreateStyle>
        </Container>
      </section>
    </main>
  );
}

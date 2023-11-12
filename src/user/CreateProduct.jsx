import { Box, Container } from "@mui/material";
import React from "react";
import { ProductCreateStyle, ProductImageUpload } from "../style/ProductCreateStyle";
import { CloudUpload } from "@mui/icons-material";
import assets from "../assets";
import { CommonButton } from "../style/CommonButton";
import { VisuallyHiddenInput } from "../style/AuthWrapperStyle";
import { ColorPalette } from "../assets/scss/ThemePalet";
import CommonTitle from "../components/CommonTitle";
import { CommonInputType } from "../style/CommonInputType";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createProduct } from "../redux/slice/ProductSlice";

export default function CreateProduct() {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const { title, description, image } = data;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image[0]);
    const response = dispatch(createProduct(formData));
    console.log(response);
  };

  return (
    <main>
      <section className="productCreateWrapper">
        <Container>
          <CommonTitle title="Create Product" variant="h3" textColor={ColorPalette.blackColor} />
        </Container>
        <ProductCreateStyle>
          <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box className="text-center">
                <ProductImageUpload>
                  <figure>
                    <img src={assets.noImage} alt="No Image Available" />
                  </figure>
                  <CommonButton className="upload" component="label" variant="contained" startIcon={<CloudUpload />} style={{ backgroundColor: `${ColorPalette.secondaryColor}` }}>
                    <VisuallyHiddenInput type="file" {...register("image", { required: true })} />
                  </CommonButton>
                  <span className="error" error={!!errors.image}>
                    {errors.image?.type === "required" ? "Please add an image" : ""}
                  </span>
                </ProductImageUpload>
                <Box className="form-group">
                  <label>Title</label>
                  <CommonInputType
                    variant="outlined"
                    label="Enter your Title"
                    {...register("title", { required: true, minLength: 3 })}
                    error={!!errors.title}
                    helperText={errors.title?.type === "required" ? "Title is required" : errors.title?.type === "minLength" ? "Minimum 3 characters are required" : ""}
                  />
                </Box>
                <Box className="form-group">
                  <label>Description</label>
                  <CommonInputType
                    variant="outlined"
                    label="Enter your Description"
                    multiline={true}
                    rows={4}
                    {...register("description", { required: true, minLength: 3 })}
                    error={!!errors.description}
                    helperText={errors.description?.type === "required" ? "Description is required" : errors.description?.type === "minLength" ? "Minimum 3 characters are required" : ""}
                  />
                </Box>
                <Box className="form-group text-center">
                  <CommonButton fullWidth type="submit" variant="contained" style={{ backgroundColor: `${ColorPalette.primaryColor}` }}>
                    Submit
                  </CommonButton>
                </Box>
              </Box>
            </form>
          </Container>
        </ProductCreateStyle>
      </section>
    </main>
  );
}

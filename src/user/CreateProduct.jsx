import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import { ProductCreateStyle, ProductImageUpload } from "../style/ProductCreateStyle";
import { CloudUpload } from "@mui/icons-material";
import assets from "../assets";
import { CommonButton } from "../style/CommonButton";
import { VisuallyHiddenInput } from "../style/AuthWrapperStyle";
import { ColorPalette } from "../assets/scss/ThemePalet";
import CommonTitle from "../components/CommonTitle";
import { CommonInputType } from "../style/CommonInputType";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createProduct, listProduct } from "../redux/slice/ProductSlice";

export default function CreateProduct() {
  const dispatch = useDispatch();
  const [previewImage, setPreviewImage] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const onSubmit = async (data) => {
    const { title, description, image } = data;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image[0]);

    try {
      const response = await dispatch(createProduct(formData));
      dispatch(listProduct({ perpage: 9 }));
      console.log(response);
    } catch (error) {
      console.error("Error creating product:", error);
    }
    reset();
    setPreviewImage(null);
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
                    <img src={previewImage || assets.noImage} alt="Preview Image" />
                  </figure>
                  <CommonButton className="upload" component="label" variant="contained" startIcon={<CloudUpload />} style={{ backgroundColor: `${ColorPalette.secondaryColor}` }}>
                    <VisuallyHiddenInput type="file" {...register("image", { required: true })} onChange={handleImageChange} />
                  </CommonButton>
                  {!!errors.image && <span className="error">{errors.image?.type === "required" ? "Please add an image" : ""}</span>}
                </ProductImageUpload>
                <Box className="form-group">
                  <label>Title</label>
                  <Controller
                    name="title"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Title is required", minLength: { value: 3, message: "Minimum 3 characters are required" } }}
                    render={({ field }) => <CommonInputType {...field} variant="outlined" label="Enter your Title" error={!!errors.title} helperText={errors.title?.message} />}
                  />
                  {/* <CommonInputType variant="outlined" label="Enter your Title" {...register("title", { required: true, minLength: 3 })} error={!!errors.title} helperText={errors.title?.type === "required" ? "Title is required" : errors.title?.type === "minLength" ? "Minimum 3 characters are required" : ""} /> */}
                </Box>
                <Box className="form-group">
                  <label>Description</label>
                  <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Description is required", minLength: { value: 3, message: "Minimum 3 characters are required" } }}
                    render={({ field }) => <CommonInputType {...field} variant="outlined" label="Enter your Description" multiline={true} rows={4} error={!!errors.description} helperText={errors.description?.message} />}
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

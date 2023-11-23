import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductCreateStyle, ProductImageUpload } from "../style/ProductCreateStyle";
import { CloudUpload } from "@mui/icons-material";
import assets from "../assets";
import { CommonButton } from "../style/CommonButton";
import { VisuallyHiddenInput } from "../style/AuthWrapperStyle";
import { ColorPalette } from "../assets/scss/ThemePalet";
import CommonTitle from "../components/CommonTitle";
import { CommonInputType } from "../style/CommonInputType";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { image } from "../redux/Helper";
import { updateProduct } from "../redux/slice/ProductSlice";

export default function CreateProduct() {
  const [prevImage, setPrevImage] = useState(null);
  const { id } = useParams();
  const { items } = useSelector((state) => state?.Pro);
  const dispatch = useDispatch();
  const {
    formState: { errors },
    handleSubmit,
    control,
    setValue,
  } = useForm();

  const product = items.find((item) => item._id === id);

  useEffect(() => {
    if (product) {
      setValue("title", product.title);
      setValue("description", product.description);
      setPrevImage(product.image);
    }
  }, [product, setValue]);

  const onSubmit = async (data) => {
    const { title, description } = data;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", prevImage);
    console.log("Image", prevImage);

    try {
      if (id) {
        formData.append("id", id);
        await dispatch(updateProduct(formData));
      }
    } catch (error) {
      console.error("Error creating/updating product:", error);
    }
  };

  return (
    <main>
      <section className="productCreateWrapper">
        <Container>
          <CommonTitle title="Update Product" variant="h3" textColor={ColorPalette.blackColor} />
        </Container>
        <ProductCreateStyle>
          <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box className="text-center">
                <ProductImageUpload>
                  <figure>
                    <img src={prevImage ? image(prevImage) : assets.noImage} alt="Preview Image" />
                  </figure>
                  <CommonButton className="upload" component="label" variant="contained" startIcon={<CloudUpload />} style={{ backgroundColor: `${ColorPalette.secondaryColor}` }}>
                    <VisuallyHiddenInput type="file" accept="image/*" onChange={(e) => setPrevImage(e.target.files[0])} />
                  </CommonButton>
                </ProductImageUpload>
                <Box className="form-group">
                  <label>Title</label>
                  <Controller name="title" control={control} defaultValue="" rules={{ required: "Title is required", minLength: { value: 3, message: "Minimum 3 characters are required" } }} render={({ field }) => <CommonInputType {...field} variant="outlined" label="Enter your Title" error={!!errors.title} helperText={errors.title?.message} />} />
                </Box>
                <Box className="form-group">
                  <label>Description</label>
                  <Controller name="description" control={control} defaultValue="" render={({ field }) => <CommonInputType {...field} variant="outlined" label="Enter your Description" multiline={true} rows={4} />} />
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

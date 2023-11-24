import React, { useEffect } from "react";
import { ProductDetailsStyle } from "../style/ProductDetailsStyle";
import { Box, Container, Typography } from "@mui/material";
import assets from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { image } from "../redux/Helper";
import { detailsProduct } from "../redux/slice/ProductSlice";

export default function ProductDetails() {
  const { details } = useSelector((state) => state.Pro);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!details) {
      const storedDetails = localStorage.getItem("productDetails");
      if (storedDetails) {
        dispatch(detailsProduct.fulfilled({ data: JSON.parse(storedDetails), message: "Product detail fetched successfully" }));
      }
    }
  }, [details]);

  return (
    <>
      <section className="productDetailsWrapper">
        <Container>
          <ProductDetailsStyle>
            <Box className="detailsImageHolder">
              <figure>
                <img src={details.image === "" && details.image === undefined ? assets.noImage : image(details.image)} alt="" />
              </figure>
            </Box>
            <Box className="detailsContentHolder">
              <Typography variant="h3">{details.title}</Typography>
              <Typography variant="body2" className="createAt">
                <strong>Create At:</strong> <span>{details.createdAt}</span>
              </Typography>
              <Typography variant="body1">{details.description}</Typography>
            </Box>
          </ProductDetailsStyle>
        </Container>
      </section>
    </>
  );
}

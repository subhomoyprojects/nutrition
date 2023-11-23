import React from "react";
import { ProductDetailsStyle } from "../style/ProductDetailsStyle";
import { Box, Container, Typography } from "@mui/material";
import assets from "../assets";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { image } from "../redux/Helper";

export default function ProductDetails() {
  const { id } = useParams();
  const { items } = useSelector((state) => state.Pro);

  const product = items.find((item) => item._id === id);

  console.log(id);

  return (
    <>
      {product && (
        <section className="productDetailsWrapper">
          <Container>
            <ProductDetailsStyle>
              <Box className="detailsImageHolder">
                <figure>
                  <img src={product.image === "" && product.image === undefined ? assets.noImage : image(product.image)} alt="" />
                </figure>
              </Box>
              <Box className="detailsContentHolder">
                <Typography variant="h3">{product.title}</Typography>
                <Typography variant="body2" className="createAt">
                  <strong>Create At:</strong> <span>21-11-2023</span>
                </Typography>
                <Typography variant="body1">{product.description}</Typography>
              </Box>
            </ProductDetailsStyle>
          </Container>
        </section>
      )}
    </>
  );
}

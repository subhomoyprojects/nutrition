import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import CommonTitle from "../components/CommonTitle";
import { ProductListWrapper, TitleHolder } from "../style/ProductListsStyle";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import { listProduct } from "../redux/slice/ProductSlice";
export default function Product() {
  const { items } = useSelector((state) => state?.Pro);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProduct());
  }, []);

  return (
    <>
      <section className="productsWrapper">
        <Container>
          <TitleHolder>
            <CommonTitle title="Product" subTitle="Lists" variant="h3" />
          </TitleHolder>
        </Container>
        <ProductListWrapper>
          <Container>
            <Grid container spacing={5}>
              {items.map((element, index) => (
                <ProductItem key={index * 2} value={element} />
              ))}
            </Grid>
          </Container>
        </ProductListWrapper>
      </section>
    </>
  );
}

import { Container, Grid, Pagination, Stack } from "@mui/material";
import React, { useEffect } from "react";
import CommonTitle from "../components/CommonTitle";
import { ProductListWrapper, TitleHolder } from "../style/ProductListsStyle";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import { listProduct } from "../redux/slice/ProductSlice";
import CustomPaginationComponent from "../components/CustomPaginationComponent";
export default function Product() {
  const { items, totalPage, page } = useSelector((state) => state?.Pro);

  const handelChange = (e, pageNumber) => {
    dispatch(listProduct({ page: pageNumber, perpage: 9 }));
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProduct({ perpage: 9 }));
  }, [dispatch]);

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
              {Array.isArray(items) && items.map((element, index) => <ProductItem key={index * 2} value={element} />)}
            </Grid>
          </Container>
          {Array.isArray(items) && items.length !== 0 ? (
            <Stack spacing={2}>
              <CustomPaginationComponent totalPage={totalPage} handelChange={handelChange} page={page} />
            </Stack>
          ) : null}
        </ProductListWrapper>
      </section>
    </>
  );
}

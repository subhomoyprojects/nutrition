import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CommonTitle from "../components/CommonTitle";
import { ProductListItem, ProductListWrapper, TitleHolder } from "../style/ProductListsStyle";
import assets from "../assets";
import { CommonButton } from "../style/CommonButton";
import { ColorPalette } from "../assets/scss/ThemePalet";
export default function Product() {
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
              <ProductListItem item sm={6} md={4}>
                <Card className="product">
                  <CardMedia sx={{ height: 140 }} image={assets.blog1} title="green iguana" />
                  <CardContent>
                    <Typography gutterBottom variant="h4">
                      Magnesium
                    </Typography>
                    <Typography variant="body2">Lorem Ipsum Dolar</Typography>
                  </CardContent>
                  <CardActions>
                    <CommonButton variant="contained" className="update" style={{ backgroundColor: `${ColorPalette.lightBlue}` }}>
                      Update
                    </CommonButton>
                    <CommonButton variant="contained" className="delete" style={{ backgroundColor: `${ColorPalette.primaryColor}` }}>
                      Delete
                    </CommonButton>
                  </CardActions>
                </Card>
              </ProductListItem>
            </Grid>
          </Container>
        </ProductListWrapper>
      </section>
    </>
  );
}

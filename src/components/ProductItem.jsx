import React from "react";
import { ProductListItem } from "../style/ProductListsStyle";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { CommonButton } from "../style/CommonButton";
import assets from "../assets";
import { ColorPalette } from "../assets/scss/ThemePalet";
import { image } from "../redux/Helper";

export default function ProductItem({ value }) {
  return (
    <ProductListItem item sm={6} md={4}>
      <Card className="product">
        {value?.image === undefined ? <CardMedia sx={{ height: 200 }} image={assets.noImage} title="Product Image" /> : <CardMedia sx={{ height: 200 }} image={image(value.image)} title="Product Image" />}
        <CardContent>
          <Typography gutterBottom variant="h4">
            {value.title}
          </Typography>
          <Typography variant="body2">{value.description}</Typography>
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
  );
}

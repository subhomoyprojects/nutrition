import React from "react";
import { ProductListItem } from "../style/ProductListsStyle";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { CommonButton } from "../style/CommonButton";
import assets from "../assets";
import { ColorPalette } from "../assets/scss/ThemePalet";
import PropTypes from "prop-types";

export default function ProductItem({ title, description, image }) {
  return (
    <ProductListItem item sm={6} md={4}>
      <Card className="product">
        <CardMedia sx={{ height: 200 }} image={image !== "" ? image : assets.noImage} title="Product Image" />
        <CardContent>
          <Typography gutterBottom variant="h4">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
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

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

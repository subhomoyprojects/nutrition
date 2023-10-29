import { Card, CardContent, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function WhyToChooseComponent({ image, title, content }) {
  return (
    <Card className="whyChooseCard">
      <figure>
        <img src={image} alt="" />
      </figure>
      <CardContent className="p-0">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{content}</Typography>
      </CardContent>
    </Card>
  );
}

WhyToChooseComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

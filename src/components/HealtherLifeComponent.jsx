import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { HealtherItemHolder } from "../style/HomeStyle";

export default function HealtherLifeComponent({ title, content }) {
  return (
    <HealtherItemHolder>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1">{content}</Typography>
    </HealtherItemHolder>
  );
}

HealtherLifeComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

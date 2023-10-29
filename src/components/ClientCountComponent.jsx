import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function ClientCountComponent({ count, title, content }) {
  return (
    <>
      <Typography variant="h2">+{count}</Typography>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">{content}</Typography>
    </>
  );
}

ClientCountComponent.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

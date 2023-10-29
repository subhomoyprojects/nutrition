import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { CommonInputType } from "../style/CommonInputType";

export default function CommonTextField({ id, label, variant }) {
  return (
    <>
      <CommonInputType id={id} label={label} variant={variant} />
    </>
  );
}
CommonTextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
};

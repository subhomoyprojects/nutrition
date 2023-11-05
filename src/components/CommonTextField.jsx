import PropTypes from "prop-types";
import { CommonInputType } from "../style/CommonInputType";

export default function CommonTextField({ id, label, variant, rows, multiline, helperText }) {
  return (
    <>
      <CommonInputType id={id} label={label} multiline={multiline ? multiline : ""} variant={variant} rows={rows} helperText={helperText} />
    </>
  );
}
CommonTextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  rows: PropTypes.number,
  multiline: PropTypes.boolean,
  helperText: PropTypes.any,
};

import { useEffect } from "react";
import { CommonHeading } from "../style/CommonHeading";
import PropTypes from "prop-types";

export default function CommonTitle({ variant, title, subTitle, textColor }) {
  useEffect(() => {}, [textColor]);

  return (
    <>
      <CommonHeading variant={variant}>
        <strong style={{ color: textColor }}>{title}</strong> <span>{subTitle}</span>
      </CommonHeading>
    </>
  );
}
CommonTitle.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  textColor: PropTypes.string,
};

import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { CommonBox, LeftBox, LeftSideHolder, MiddleContent, RightBox } from "../style/AuthWrapperStyle";
import CommonTitle from "../components/CommonTitle";
import { ColorPalette } from "../assets/scss/ThemePalet";
import assets from "../assets";
import { Link } from "react-router-dom";

export default function CommonAuthWrapper({ title, subInfo, children, rightImage }) {
  return (
    <>
      <section className="authWrapper p-0">
        <CommonBox>
          <LeftBox>
            <LeftSideHolder>
              <Box>
                <Box className="logoHolder">
                  <Link to="/">
                    <img src={assets.logo} alt="" />
                  </Link>
                </Box>
                <CommonTitle variant="h2" subTitle="" title={title} textColor={ColorPalette.blackColor} />
                <Typography className="description" variant="body1">
                  {subInfo}
                </Typography>
              </Box>
              <MiddleContent>{children}</MiddleContent>
            </LeftSideHolder>
          </LeftBox>
          <RightBox>
            <img src={rightImage} alt="" />
          </RightBox>
        </CommonBox>
      </section>
    </>
  );
}

CommonAuthWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  subInfo: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  rightImage: PropTypes.string.isRequired,
};

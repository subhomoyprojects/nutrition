import React from "react";
import CommonAuthWrapper from "../components/CommonAuthWrapper";
import { Box, Typography } from "@mui/material";
import CommonTextField from "../components/CommonTextField";
import assets from "../assets";
import { VisuallyHiddenInput } from "../style/AuthWrapperStyle";
import { CloudUpload } from "@mui/icons-material";
import { CommonButton } from "../style/CommonButton";
import { ColorPalette } from "../assets/scss/ThemePalet";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <CommonAuthWrapper title="Login" subInfo="Create an account or log in to manage your Book-d business" rightImage={assets.login}>
        <Box className="leftSide">
          <form>
            <Box className="form-group">
              <label>Email</label>
              <CommonTextField variant="outlined" label="Enter your email" />
            </Box>
            <Box className="form-group">
              <label>Password</label>
              <CommonTextField variant="outlined" label="Enter your password" />
            </Box>
            <Box className="form-group text-center">
              <CommonButton fullWidth variant="contained" style={{ backgroundColor: `${ColorPalette.primaryColor}` }}>
                Login
              </CommonButton>
            </Box>
          </form>
          <Typography variant="body1" className="pageGo">
            New to member access? <Link to="/signup">Signup</Link>
          </Typography>
        </Box>
      </CommonAuthWrapper>
    </>
  );
}

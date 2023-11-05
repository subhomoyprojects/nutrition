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
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
      <CommonAuthWrapper title="Signup" subInfo="Create your new account for lorem@email.com by completing these details." rightImage={assets.signup}>
        <Box className="leftSide">
          <form>
            <Box className="form-group">
              <Box>
                <label>First Name</label>
                <CommonTextField
                  variant="outlined"
                  label="Enter your first name"
                  multiline={false}
                  {...register(first_name, { required: true, maxLength: 3 })}
                  error={!!errors.first_name}
                  helperText={errors.first_name?.type === "required" ? "First name is required" : errors.first_name?.type === "minLength" ? "Minimum 3 characters are required" : ""}
                />
              </Box>
              <Box>
                <label>Last Name</label>
                <CommonTextField variant="outlined" label="Enter your last name" />
              </Box>
            </Box>
            <Box className="form-group">
              <label>Email</label>
              <CommonTextField variant="outlined" label="Enter your email" />
            </Box>
            <Box className="form-group">
              <label>Password</label>
              <CommonTextField variant="outlined" label="Enter your password" />
            </Box>
            <Box className="form-group">
              <CommonButton component="label" variant="contained" startIcon={<CloudUpload />} style={{ backgroundColor: `${ColorPalette.secondaryColor}` }}>
                Upload file
                <VisuallyHiddenInput type="file" />
              </CommonButton>
            </Box>
            <Box className="form-group text-center">
              <CommonButton fullWidth variant="contained" style={{ backgroundColor: `${ColorPalette.primaryColor}` }}>
                Signup
              </CommonButton>
            </Box>
          </form>
          <Typography variant="body1" className="pageGo">
            Already have an account? <Link to="/login">Sigin</Link>
          </Typography>
        </Box>
      </CommonAuthWrapper>
    </>
  );
}

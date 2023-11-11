import React, { useEffect } from "react";
import CommonAuthWrapper from "../components/CommonAuthWrapper";
import { Box, Typography } from "@mui/material";
import assets from "../assets";
import { CommonButton } from "../style/CommonButton";
import { ColorPalette } from "../assets/scss/ThemePalet";
import { Link, useNavigate } from "react-router-dom";
import { CommonInputType } from "../style/CommonInputType";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginAuth } from "../redux/slice/AuthSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirectTo = useSelector((state) => state.Auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    dispatch(loginAuth(formData));
  };

  useEffect(() => {
    const RedirectUser = () => {
      let token = localStorage.getItem("token");
      let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

      if (token !== null && token !== undefined && token !== "") {
        isInLoginPage && navigate("/");
      }
    };

    RedirectUser();
  }, [navigate, redirectTo]);

  return (
    <>
      <CommonAuthWrapper title="Login" subInfo="Create an account or log in to manage your Book-d business" rightImage={assets.login}>
        <Box className="leftSide">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box className="form-group">
              <label>Email</label>
              <CommonInputType
                variant="outlined"
                label="Enter your email"
                {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
                error={!!errors.email}
                helperText={errors.email?.type === "required" ? "Email is required." : errors.email?.type === "pattern" ? "Valid email is required" : ""}
              />
            </Box>
            <Box className="form-group">
              <label>Password</label>
              <CommonInputType variant="outlined" label="Enter your password" {...register("password", { required: true })} error={!!errors.password} helperText={errors.password?.type === "required" ? "Password is required" : ""} />
            </Box>
            <Box className="form-group text-center">
              <CommonButton type="submit" fullWidth variant="contained" style={{ backgroundColor: `${ColorPalette.primaryColor}` }}>
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

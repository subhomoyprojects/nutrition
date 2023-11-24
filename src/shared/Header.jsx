import { Avatar, Badge, Box, Button, Container, IconButton, Menu, Stack, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const pages = ["Home", "About", "Product", "Contact", "Create Product"];
import assets from "../assets";
import "./shared.scss";
import { HeaderAuth, HeaderWrapper, MyProfile } from "../style/HeaderStyle";
import { Logout, PersonOutline } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logoutAuth } from "../redux/slice/AuthSlice";

export default function Header() {
  const { isLogin, full_Name } = useSelector((state) => state.Auth);
  console.log(full_Name);
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logOut = () => {
    dispatch(logoutAuth());
    navigate("/login");
  };

  const loginDetails = JSON.parse(localStorage.getItem("loginDetails"));

  return (
    <HeaderWrapper position="static" color="transparent">
      <Container>
        <Toolbar disableGutters>
          <Box className="logo">
            <Link to="/">
              <img src={assets.logo} alt="" />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appBar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appBar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link
                  to={
                    `/${page
                      .split(" ")
                      .filter((arr) => arr !== "")
                      .join("")
                      .toLowerCase()}` === "/home"
                      ? `/`
                      : `/${page
                          .split("")
                          .filter((arr) => arr !== "")
                          .join("")
                          .toLowerCase()}`
                  }
                  key={page}
                  onClick={handleCloseNavMenu}
                  style={{ color: "#000", display: "block", minWidth: "150px", paddingBlock: "10px" }}
                >
                  {page}
                </Link>
              ))}
            </Menu>
          </Box>
          <Box className="logo" sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img src={assets.logo} alt="" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} className="navigation">
            {pages.map((page) => (
              <Link
                to={
                  `/${page
                    .split(" ")
                    .filter((arr) => arr !== "")
                    .join("")
                    .toLowerCase()}` === "/home"
                    ? `/`
                    : `/${page
                        .split(" ")
                        .filter((arr) => arr !== "")
                        .join("")
                        .toLowerCase()}`
                }
                key={page}
                onClick={handleCloseNavMenu}
              >
                {page}
              </Link>
            ))}
          </Box>

          <HeaderAuth sx={{ flexGrow: 0 }}>
            {isLogin ? (
              <MyProfile>
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  {/* <Button onClick={logOut}>Welcome, {loginDetails ? `${loginDetails.first_name} ${loginDetails.last_name}` : "User"}</Button> */}
                  <Button onClick={logOut}>Welcome, {full_Name ? `${full_Name}` : "User"}</Button>
                </Stack>
              </MyProfile>
            ) : (
              <Link to="/login">
                Login <PersonOutline />
              </Link>
            )}
          </HeaderAuth>
        </Toolbar>
      </Container>
    </HeaderWrapper>
  );
}

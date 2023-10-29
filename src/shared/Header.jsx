import { Badge, Box, Button, Container, IconButton, Menu, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
const pages = ["Home", "About", "Product", "Contact"];
import assets from "../assets";
import "./shared.scss";
import { HeaderAuth, HeaderWrapper } from "../style/HeaderStyle";
import Search from "@mui/icons-material/Search";
import { LocalMall, PersonOutline } from "@mui/icons-material";

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
                <Link to={`/${page.toLowerCase()}` === "/home" ? `/` : `/${page.toLowerCase()}`} key={page} onClick={handleCloseNavMenu} style={{ color: "#000", display: "block", minWidth: "150px", paddingBlock: "10px" }}>
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
              <Link to={`/${page.toLowerCase()}` === "/home" ? `/` : `/${page.toLowerCase()}`} key={page} onClick={handleCloseNavMenu}>
                {page}
              </Link>
            ))}
          </Box>

          <HeaderAuth sx={{ flexGrow: 0 }}>
            <Button>
              Search <Search />
            </Button>
            <Link to="/login">
              Login <PersonOutline />
            </Link>
            <Button>
              Cart
              <Badge color="warning" badgeContent={0}>
                <LocalMall />
              </Badge>
            </Button>
          </HeaderAuth>
        </Toolbar>
      </Container>
    </HeaderWrapper>
  );
}

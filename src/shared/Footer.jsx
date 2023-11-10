import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import assets from "../assets";
import "./shared.scss";
import { ImportantLinks } from "../json/ImportantLinksJson";
import { Email, PhoneInTalk, Place, Send } from "@mui/icons-material";
import { CopyRight } from "../style/CopyRight";
import { AgreeBox, FooterTop } from "../style/FooterStyle";
import CommonTitle from "../components/CommonTitle";
import { ColorPalette } from "../assets/scss/ThemePalet";
import { CommonInputType } from "../style/CommonInputType";

export default function Footer(newsletter) {
  const year = new Date().getFullYear();
  return (
    <footer className={`footerWrapper commonGap ${newsletter && "newsletter"}`}>
      <Container className="container">
        <FooterTop className="footerTop">
          <CommonTitle textColor={ColorPalette.blackColor} variant="h3" title="Get Weekly Diet stories to" subTitle="Keep Yourself Motivated" />
          <form className="newsletterField">
            <CommonInputType id="newsletter" variant="outlined" label="Enter Your Email Id" />
            <Button className="sendButton" variant="contained" endIcon={<Send />}></Button>
          </form>
          <AgreeBox>
            <FormControlLabel control={<Checkbox defaultChecked />} label="I have read and agree to Biotential's Privacy Policy." />
          </AgreeBox>
        </FooterTop>
        <Box className="footerBottom">
          <Grid container spacing={6}>
            <Grid item sm={12} md={4}>
              <Link to="/">
                <img src={assets.logo} alt="" />
              </Link>
              <Typography className="footerDescription" variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
              </Typography>
            </Grid>
            <Grid item sm={12} md={4}>
              <Typography variant="h2">Important Links</Typography>
              <ul className="linksHolder">
                {ImportantLinks.map((item) => (
                  <li key={item}>
                    <Link to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid item sm={12} md={4}>
              <Typography variant="h2">Contact Links</Typography>
              <ul className="linksHolder">
                <li>
                  <a href="mailto:support@biotential.com">
                    <Email />
                    <span> support@biotential.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+1 203-489-XXX">
                    <PhoneInTalk />
                    <span>+1 203-489-XXX</span>
                  </a>
                </li>
                <li>
                  <p>
                    <Place />
                    <span>224 N Desplaines St #350 Chicago, Illinois 60661</span>
                  </p>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <CopyRight>&copy; {year} All Rights Reserved.</CopyRight>
    </footer>
  );
}

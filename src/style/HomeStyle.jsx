import styled from "@emotion/styled";
import { Box, Container, Grid } from "@mui/material";
import assets from "../assets";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const BannerGrid = styled(Grid)`
  align-items: center;
  .bannerButton {
    margin-top: 2rem;
  }
  .banner-img {
    background: url(${assets.bannerBg}) center no-repeat;
    background-size: contain;
  }
`;
export const BrandContainer = styled(Container)`
  .logoList {
    margin-top: 6rem;
    max-width: 800px;
    margin-inline: auto;
    .swiper-slide {
      img {
        transition: all 0.3s;
        -webkit-filter: grayscale(100);
        filter: grayscale(100);
        &:hover {
          -webkit-filter: grayscale(0);
          filter: grayscale(0);
        }
      }
    }
  }
`;
export const WhyToChoose = styled(Box)`
  .heading-area {
    p {
      max-width: 570px;
      margin-inline: auto;
      font-size: 1.6rem;
      color: ${ColorPalette.whiteColor};
    }
    &.text-center {
      h3 {
        &::after {
          right: 0;
        }
      }
    }
  }
  .whyChooseCardHolder {
    .whyChooseCard {
      padding: 3rem 2.2rem;
      border-radius: 2rem;
      figure {
        background-color: ${ColorPalette.lightOrange};
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 62px;
        height: 62px;
        border-radius: 2rem;
        margin-bottom: 1px;
        margin-bottom: 1.5rem;
        img {
          max-width: 3.3rem;
          max-height: 3.3rem;
        }
      }
      h4 {
        font-size: 1.8rem;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
        text-transform: capitalize;
        margin-bottom: 1.5rem;
      }
      p {
        font-size: 1.4rem;
        font-weight: 300;
        line-height: 2;
      }
    }
  }
`;
export const HealtherContainer = styled(Container)`
  .healther {
    background: url(${assets.healtherBg}) center no-repeat;
    background-size: cover;
  }
  .healtherItem {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    column-gap: 1.5rem;
    row-gap: 4rem;
    margin-top: 2rem;
    & > * {
      flex: 0 0 auto;
      width: calc(100% / 2 - (1.5rem - (1.5rem / 2)));
    }
  }
`;

export const ActionHolder = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  & > * {
    flex: 1;
    &.actionBtn {
      flex: 0 0 auto;
      width: auto;
    }
  }
  p {
    font-size: 1.6rem;
    color: ${ColorPalette.blackColor};
  }
`;

export const ClientCount = styled(Grid)`
  .clientCountItem {
    &:not(:last-of-type) {
      border-right: 1px solid #c77532;
    }
  }
  h2 {
    color: ${ColorPalette.whiteColor};
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }
  h6 {
    font-size: 1.6rem;
    color: ${ColorPalette.secondaryColor};
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.3rem;
    color: ${ColorPalette.blackColor};
  }
`;

export const HealtherItemHolder = styled(Box)`
  padding-left: 2rem;
  position: relative;
  max-width: 475px;
  &::after {
    content: "";
    background-color: ${ColorPalette.primaryColor};
    width: 5px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  h5 {
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.3rem;
  }
`;
export const MobileApplicationForm = styled(Grid)`
  .MuiBox-root {
    margin-bottom: 3rem;
  }
  .btnHolder {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    button {
      padding: 0;
    }
  }
`;
export const TestimonialsHolder = styled(Box)`
  padding-left: 10rem;
  padding-top: 4rem;
  padding-right: 3rem;
  position: relative;
  &::before {
    content: "";
    width: 115px;
    height: 90px;
    background: url(${assets.quote}) no-repeat center;
    background-size: 100%;
    opacity: 0.7;
    position: absolute;
    left: 0;
    top: 0;
  }
  p {
    color: ${ColorPalette.whiteColor};
    font-weight: 500;
    font-size: 2.2rem;
  }
`;
export const AvatarHolder = styled(Box)`
  display: inline-flex;
  align-items: center;
  gap: 1.3rem;
  figure {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100px;
      height: 100%;
      object-fit: cover;
    }
  }
  h3 {
    color: ${ColorPalette.whiteColor};
    text-transform: capitalize;
    font-weight: 600;
    margin-bottom: 0%;
  }
`;
export const BlogTitle = styled(Box)`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  h3 {
    flex: 1;
    margin-bottom: 0;
  }
  button {
    flex: 0 0 auto;
    width: auto;
  }
`;
export const BlogCategory = styled(Box)`
  width: 100%;
  margin-left: auto;
  max-width: calc(100% - (50% - (1200px / 2)));
  margin-top: 5.6rem;
  .swiper-slide {
    height: auto;
  }
  .blogItem {
    height: 100%;
    span {
      position: relative;
      border-radius: 2.5rem;
      overflow: hidden;
      height: 100%;
      width: 100%;
      &::after {
        content: "";
        border-radius: 25px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 60.98%, rgba(0, 0, 0, 0.76) 105.74%);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: absolute;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    figcaption {
      position: absolute;
      padding: 3rem;
      left: 0;
      right: 0;
      bottom: 0;
      h6 {
        padding: 5px 20px;
        border-radius: 3.5rem;
        background-color: ${ColorPalette.whiteColor};
        font-size: 1.4rem;
        text-transform: uppercase;
        letter-spacing: 0.14285714285em;
        display: inline-flex;
        margin-bottom: 1rem;
      }
      p {
        font-weight: 600;
        font-size: 1.4rem;
        color: ${ColorPalette.whiteColor};
      }
    }
  }
`;

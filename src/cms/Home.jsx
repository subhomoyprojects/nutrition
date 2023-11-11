import { Box, Container, Grid, Typography } from "@mui/material";
import { CommonButton } from "../style/CommonButton";
import { ColorPalette } from "../assets/scss/ThemePalet";
import { ActionHolder, AvatarHolder, BannerGrid, BlogCategory, BlogTitle, BrandContainer, ClientCount, HealtherContainer, MobileApplicationForm, TestimonialsHolder, WhyToChoose } from "../style/HomeStyle";
import assets from "../assets";
import { LogoList } from "../json/LogoList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation } from "swiper/modules";
import CommonTitle from "../components/CommonTitle";
import { WhyToChooseJson } from "../json/WhyToChooseJson";
import WhyToChooseComponent from "../components/WhyToChooseComponent";
import HealtherLifeComponent from "../components/HealtherLifeComponent";
import { HealtherLifeJson } from "../json/HealtherLifeJson";
import { ClientCountJson } from "../json/ClientCountJson";
import ClientCountComponent from "../components/ClientCountComponent";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Testimonials } from "../json/TestimonialsJson";
import { BlogItemJson } from "../json/BlogItemJson";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { reset_redirectTo } from "../redux/slice/AuthSlice";

export default function Home() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(reset_redirectTo(null));
  // }, [dispatch]);

  let swiper;
  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };
  const latestBlog = {
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  return (
    <main>
      <section className="banner-wrapper">
        <Container>
          <BannerGrid container spacing={8}>
            <Grid item sm={12} md={5.5}>
              <h1>
                Super Convenient <span>Quality Protein</span>
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur seddo eiumod tempor incididunt labore adipiscing seddo eiumod</p>
              <CommonButton className="bannerButton" variant="contained" style={{ backgroundColor: `${ColorPalette.darkGray}` }}>
                Start now with Biotential
              </CommonButton>
            </Grid>
            <Grid item sm={12} md={6.5} className="banner-img">
              <img src={assets.bannerImage} alt="" />
            </Grid>
          </BannerGrid>
        </Container>
      </section>
      <section className="brand-wrapper">
        <BrandContainer>
          <Typography variant="h3" className="text-center">
            PERFECT BRAND IS FEATURED ON
          </Typography>
          <Swiper
            breakpoints={breakpoints}
            spaceBetween={20}
            slidesPerView={1}
            modules={[Autoplay]}
            className="logoList"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {LogoList.map((item, index) => (
              <SwiperSlide key={index * 6}>
                <figure>
                  <img src={item} alt={item} />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </BrandContainer>
      </section>
      <section className="whyToChooseWrapper">
        <WhyToChoose>
          <Container className="heading-area text-center">
            <CommonTitle textColor={ColorPalette.whiteColor} variant="h3" title="Why To Choose" subTitle="Biotential" />
            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur seddo eiumod tempor incididunt labore adipiscing seddo eiumod</Typography>
          </Container>
          <Container>
            <Grid container className="whyChooseCardHolder" spacing={3} marginTop={3}>
              {WhyToChooseJson.map((item, index) => (
                <Grid item sm={12} md={3} key={index * 4}>
                  <WhyToChooseComponent image={item.image} title={item.title} content={item.content} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </WhyToChoose>
      </section>
      <section className="healthierWrapper">
        <HealtherContainer>
          <Grid container>
            <Grid item sm={12} md={5} className="healther">
              <img src={assets.healther} alt="" />
            </Grid>
            <Grid item sm={12} md={7}>
              <CommonTitle textColor={ColorPalette.blackColor} variant="h3" title="Healthier Life is Just" subTitle="One Click Away" />
              <Box className="healtherItem">
                {HealtherLifeJson.slice(0, 4).map((item, index) => (
                  <HealtherLifeComponent key={index * 7} title={item.title} content={item.content} />
                ))}
              </Box>
              <ActionHolder marginTop={3}>
                <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur seddo eiumod tempor incididunt labore adipiscing.</Typography>
                <Box className="actionBtn">
                  <CommonButton variant="contained" style={{ backgroundColor: `${ColorPalette.secondaryColor}` }}>
                    Buy Now
                  </CommonButton>
                </Box>
              </ActionHolder>
            </Grid>
          </Grid>
        </HealtherContainer>
      </section>
      <section className="clientCountWrapper">
        <Container>
          <ClientCount container spacing={3}>
            {ClientCountJson.map((item, index) => (
              <Grid item sm={12} md={4} key={index * 9} className="clientCountItem">
                <ClientCountComponent count={item.count} title={item.title} content={item.content} />
              </Grid>
            ))}
          </ClientCount>
        </Container>
      </section>
      <section className="mobilApplicationWrapper">
        <Container>
          <MobileApplicationForm container spacing={10}>
            <Grid item sm={12} md={8}>
              <CommonTitle variant="h3" title="Get Our Mobile Application from" subTitle="Respective Application Store" textColor={ColorPalette.blackColor} />
              {HealtherLifeJson.slice(4).map((item, index) => (
                <HealtherLifeComponent key={index * 11} title={item.title} content={item.content} />
              ))}
              <Box className="btnHolder mt-20">
                <a href="">
                  <img src={assets.googlePlay} alt="" />
                </a>
                <a href="">
                  <img src={assets.appStore} alt="" />
                </a>
              </Box>
            </Grid>
            <Grid item sm={12} md={4}>
              <img src={assets.mobileApplication} alt="" />
            </Grid>
          </MobileApplicationForm>
        </Container>
      </section>
      <section className="testimonialsWrapper">
        <Container>
          <Swiper spaceBetween={20} slidesPerView={1} modules={[Autoplay, Navigation]} className="testimonials" loop={true} navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}>
            {Testimonials.map((item, index) => (
              <SwiperSlide key={index * 13} className="testimonialsItem">
                <TestimonialsHolder>
                  <p>{item.content}</p>
                  <AvatarHolder>
                    <figure>
                      <img src={assets.avatar} alt="" />
                    </figure>
                    <h3>Stepheny C.</h3>
                  </AvatarHolder>
                </TestimonialsHolder>
              </SwiperSlide>
            ))}
          </Swiper>
          <Box className="prevNextBtnHolder">
            <Box
              className="swiper-button-next"
              onClick={() => {
                swiper.slideNext();
              }}
            >
              <ArrowForward />
            </Box>
            <Box
              className="swiper-button-prev"
              onClick={() => {
                swiper.slidePrev();
              }}
            >
              <ArrowBack />
            </Box>
          </Box>
        </Container>
      </section>
      <section className="exploreLatestWrapper">
        <Container>
          <BlogTitle>
            <CommonTitle variant="h3" title="Explore Our Latest" subTitle="Health Related Articles" textColor={ColorPalette.blackColor} />
            <CommonButton variant="contained" style={{ backgroundColor: `${ColorPalette.primaryColor}` }}>
              Go to Blog
            </CommonButton>
          </BlogTitle>
        </Container>
        <BlogCategory>
          <Swiper
            breakpoints={latestBlog}
            spaceBetween={30}
            slidesPerView={1}
            modules={[Autoplay]}
            className="logoList"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {BlogItemJson.map((item, index) => (
              <SwiperSlide key={index * 14}>
                <figure className="blogItem">
                  <span>
                    <img src={item.image} alt="" />
                  </span>
                  <figcaption>
                    <Typography variant="h6">{item.category}</Typography>
                    <Typography variant="body1">{item.content}</Typography>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </BlogCategory>
      </section>
    </main>
  );
}

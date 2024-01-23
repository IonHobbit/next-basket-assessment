'use client';

import React from "react";
import Landing from "./_components/Landing";
import BestServices from "./_components/BestServices";
import FeaturedPosts from "./_components/FeaturedPosts";
import Reviews from "./_components/Reviews";
import { Box, Button, Input, Link, Stack, Typography, useTheme } from "@mui/material";
import landingPage from "@/constants/landingPage.constant";
import Footer from "@/components/Footer";
import CallToAction from "./_components/CallToAction";
import BestSellerProducts from "@/components/BestSellerProducts";

export default function Home() {

  const { palette: { primary } } = useTheme();

  return (
    <React.Fragment>
      <Landing />
      {/* <BestSellerProducts titlePosition="left" columns={5} /> */}
      <BestSellerProducts titlePosition="center" paginate columns={5} />
      <BestServices />
      <FeaturedPosts />
      <Reviews />
      <CallToAction />
      <Footer />
    </React.Fragment >
  );
}
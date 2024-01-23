'use client';

import React from "react";
import Landing from "../_components/Landing";
import BestServices from "../_components/BestServices";
import FeaturedPosts from "../_components/FeaturedPosts";
import Reviews from "../_components/Reviews";
import { Container, useTheme } from "@mui/material";
import CallToAction from "../_components/CallToAction";
import BestSellerProducts from "@/components/BestSellerProducts";

export default function Home() {

  const { palette: { primary } } = useTheme();

  return (
    <React.Fragment>
      <Container maxWidth={"xl"} sx={{ paddingX: { xs: 5, sm: 6 } }}>
        <Landing />
        <BestSellerProducts titlePosition="center" paginate columns={5} />
        <BestServices />
        <FeaturedPosts />
        <Reviews />
      </Container>
      <CallToAction />
    </React.Fragment >
  );
}
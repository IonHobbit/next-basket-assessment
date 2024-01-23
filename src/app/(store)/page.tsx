'use client';

import React from "react";
import Landing from "../_components/Landing";
import BestServices from "../_components/BestServices";
import FeaturedPosts from "../_components/FeaturedPosts";
import Reviews from "../_components/Reviews";
import { useTheme } from "@mui/material";
import Footer from "@/components/Footer";
import CallToAction from "../_components/CallToAction";
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
    </React.Fragment >
  );
}
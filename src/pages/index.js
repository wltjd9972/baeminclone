import React from "react";
import BannerEvent from "../components/BannerEvent/BannerEvent"
import Header from "../components/Header/Header";
import Category from "../components/Category/Category";


export default function HomePage() {

  return (
    <>
      <Header></Header>
      <BannerEvent></BannerEvent>
      <Category></Category>
    </>
  );
}

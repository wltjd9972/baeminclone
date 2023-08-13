import React from "react";
import Header from "../../components/Header/Header";
import BannerEvent from "../../components/BannerEvent/BannerEvent";
import RestaurantList from "../../components/RestaurantList/RestaurantList";

export default function RestaurantListPage() {

  return (
    <>
      <Header></Header>
      <BannerEvent></BannerEvent>
      <RestaurantList></RestaurantList>
    </>
  );
}

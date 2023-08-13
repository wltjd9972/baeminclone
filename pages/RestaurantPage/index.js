import React from "react";
import BannerRestaurant from "../../components/BannerRestaurant/BannerRestaurant";
import Header from "../../components/Header/Header";
import RestaurantTop from "../../components/Restaurant/RestaurantTop";
import RestaurantBot from "../../components/Restaurant/RestaurantBot";




export default function RestaurantPage() {

  return (
    <>
      <Header></Header>
      <BannerRestaurant></BannerRestaurant>
      <RestaurantTop></RestaurantTop>
      <RestaurantBot></RestaurantBot>
    </>
  );
}

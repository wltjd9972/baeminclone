import React from "react";

import RestaurantListBoxPage from "./RestaurantListBox";
import {
  RestaurantListWrapper,
} from "../../styles/RestaurantList";



export default function RestaurantList() {

  return (
    <>
      <RestaurantListWrapper>
        <RestaurantListBoxPage />
        <RestaurantListBoxPage />
        <RestaurantListBoxPage />
        <RestaurantListBoxPage />
        <RestaurantListBoxPage />
        <RestaurantListBoxPage />
      </RestaurantListWrapper>
    </>
  );
}
import React from "react";
import { useRouter } from "next/router";

import {
  RestaurantListBoxWrapper,
  RestaurantListBox,
  RestaurantListTitle,
  RestaurantListSub,
} from "../../styles/RestaurantList";



export default function RestaurantListBoxPage() {

  const router = useRouter()

  const onClickRestaurant = () => {
    router.push("/RestaurantPage")
  }


  return (
    <>
      <RestaurantListBoxWrapper>
        <RestaurantListBox onClick={onClickRestaurant}></RestaurantListBox>
        <RestaurantListTitle>BBQ</RestaurantListTitle>
        <RestaurantListSub>배달 54 ~ 56분</RestaurantListSub>
        <RestaurantListSub>최소주문금액 9,900원</RestaurantListSub>
        <RestaurantListSub>별점 4.7</RestaurantListSub>
      </RestaurantListBoxWrapper>
    </>
  );
}
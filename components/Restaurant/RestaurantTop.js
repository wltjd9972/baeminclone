import React from "react";

import {
  RestaurantWrapper,
  RestaurantInner,
  RestaurantTitle,
  StarWrapper,
  StarImg,
  HalfStarImg,
  StarNum,
  RestaurantSubTitle
} from "../../styles/Restaurant";

export default function RestaurantTop(){
  return(
    <>
      <RestaurantWrapper>
          <RestaurantInner>
            <RestaurantTitle>BBQ</RestaurantTitle>
            <StarWrapper>
              <StarImg></StarImg>
              <StarImg></StarImg>
              <StarImg></StarImg>
              <StarImg></StarImg>
              <HalfStarImg></HalfStarImg>
              <StarNum>4.7</StarNum>
            </StarWrapper>
            <RestaurantSubTitle>최근 리뷰 | 최근사장님댓글</RestaurantSubTitle>
          </RestaurantInner>
        </RestaurantWrapper>
    </>
  )
} 
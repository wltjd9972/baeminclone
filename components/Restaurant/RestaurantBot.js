import React from "react";

import {
  RestaurantNav,
  RestaurantNavWrapper,
  RestaurantNavInner,
  RestaurantNavBlock,
  BottomWrapper,
  MenuWrapper,
  MenuInner,
  MenuImg,
  MenuItem,
} from "../../styles/Restaurant";


export default function RestaurantBot() {

  return( 
    <>
      <RestaurantNavWrapper>
        <RestaurantNavInner>
          <RestaurantNavBlock>메뉴</RestaurantNavBlock> |
          <RestaurantNavBlock>정보</RestaurantNavBlock> |
          <RestaurantNavBlock>리뷰</RestaurantNavBlock> 
        </RestaurantNavInner>
      </RestaurantNavWrapper>
      <BottomWrapper>
        <MenuWrapper>
          <MenuInner>
            <MenuImg>사진</MenuImg>
            <MenuItem>정보</MenuItem>
          </MenuInner>
          <MenuInner>
            <MenuImg>사진</MenuImg>
            <MenuItem>정보</MenuItem>
          </MenuInner>
          <MenuInner>
            <MenuImg>사진</MenuImg>
            <MenuItem>정보</MenuItem>
          </MenuInner>
        </MenuWrapper>
      </BottomWrapper>
    </>
  )
}
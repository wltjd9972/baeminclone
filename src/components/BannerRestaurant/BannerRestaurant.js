import React from "react";
import {
  BannerWrapper, 
  BannerWrapperInner,
  BannerItem, 
  BannerLink,
} from "../../styles/banner";

export default function BannerRestaurant(){
return(
  <>
    <BannerWrapper>
    <BannerWrapperInner>
      <BannerItem>
        <BannerLink href="#">음식점 이미지1</BannerLink>
      </BannerItem>
      <BannerItem>
        <BannerLink href="#">음식점 이미지2</BannerLink>
      </BannerItem>
      <BannerItem>
        <BannerLink href="#">음식점 이미지3</BannerLink>
      </BannerItem>
    </BannerWrapperInner>
    </BannerWrapper>
  </>
  )
}
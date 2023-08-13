import React from "react";

import {
  BannerWrapper, 
  BannerWrapperInner,
  BannerItem, 
  BannerLink,
} from "../../styles/banner";


export default function BannerEvent() {
  return (
    <>
      <BannerWrapper>
        <BannerWrapperInner>
          <BannerItem>
            <BannerLink href="#">이벤트 배너1</BannerLink>
          </BannerItem>
          <BannerItem>
            <BannerLink href="#">이벤트 배너2</BannerLink>
          </BannerItem>
          <BannerItem>
            <BannerLink href="#">이벤트 배너3</BannerLink>
          </BannerItem>
        </BannerWrapperInner>
      </BannerWrapper>
    </>
  )
}
import React from "react";
import {
  HeaderWrapper,
  HeaderWrapper_inner,
  HeaderLogo,
  SearchBar,
  SearchLogo,
  LocationWrapper,
  HeadLocation,
  Alarm,
  Profile,
  TopWrapper,
} from "../../styles/header";
import { useRouter } from "next/router";

export default function Header(){
  const router = useRouter()

  const onClickHeaderLogo = () => {
    router.push("/HomePage")
  }


  return(
    <>
      <HeaderWrapper>
        <HeaderWrapper_inner>
        <HeaderLogo onClick={onClickHeaderLogo}></HeaderLogo>
        <SearchBar><SearchLogo></SearchLogo>
        </SearchBar>
        <LocationWrapper>
          <HeadLocation>
          주소
          </HeadLocation>
          <Alarm></Alarm>
          <Profile></Profile>
        </LocationWrapper>
        </HeaderWrapper_inner>
      </HeaderWrapper>
    </>
  )
}
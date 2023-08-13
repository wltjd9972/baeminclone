import styled from "@emotion/styled";

export const BannerWrapper = styled.div`
  margin-top: 60px;
  height: 400px;
  width: 100%; // 중앙의 슬라이드 너비와 동일
  min-width: 1300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BannerWrapperInner = styled.ul`
  height: 400px;
  color: white;
  font-size: 72px;
  list-style-type: none;
  display: flex;
  position: absolute;
  left: 50%; 
  margin: 0px 10px;
  transform: translateX(-51.5%); // 화면 중앙 정렬을 위해
`;

export const BannerItem = styled.li`
  width: 800px;
  height: 400px;
  margin: 0px 10px;
`;

export const BannerLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 72px;
  background: gray;
  border-radius: 20px;
  text-align: center;
  line-height: 400px;
  text-decoration: none;
`;

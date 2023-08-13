import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  width: 100%;
  min-width: 1300px;
  height: 120px;
  background: #2AC1BC;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeaderWrapper_inner = styled.div`
  width: 1300px;
  height: 60px;
  background: #2AC1BC;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const HeaderLogo = styled.div`
  width: 300px;
  height: 60px;
  background: url('/home/baeminLogo.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const SearchBar = styled.div`
  width: 400px;
  height: 40px;
  background: white;
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  border: 1px solid black;
  border-radius:20px;
`;

export const SearchLogo = styled.div`
  width: 20px;
  height: 20px;
  background: url('/home/Magnifier.png') center/cover no-repeat;
`;

export const LocationWrapper = styled.div`
  width: 300px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  F
`

export const HeadLocation = styled.div`
  padding-left: 10px;
  width: 200px;
  height: 40px;
  background: #1DE1DA;
  border-radius: 20px;
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
`;

export const Alarm = styled.div`
  width: 30px;
  height: 40px;
  border-radius:20px;
  background: url('/home/bell.png') center/cover no-repeat;
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
`;

export const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius:20px;
  background: url('/home/profileLogo.png') center/cover no-repeat;
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
`;




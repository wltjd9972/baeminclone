import styled from "@emotion/styled";


export const RestaurantListWrapper = styled.div`
  margin-top: 60px;
  margin-left: auto;  // 왼쪽 여백 자동
  margin-right: auto; // 오른쪽 여백 자동
  max-width: 1320px;  // (400px 박스 너비 + 10px gap) * 4
  display: grid;
  grid-template-columns: repeat(4, 320px);
  gap: 14px;
  overflow: hidden;
  margin-bottom: 80px;
`;
export const RestaurantListBoxWrapper = styled.div`
  min-width: 320px;
  height: 400px;
  display: flex;
  align-items: center; 
  justify-content: start;
  flex-direction: column;
`;
export const RestaurantListBox = styled.div`
  border-radius: 15px;
  min-width: 275px;
  height: 275px;
  display: flex;
  background-color: white;
  border: 1px solid black;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
`;

export const RestaurantListTitle = styled.div`
  padding-left: 5px;
  font-size: 18pt;
  color: black;
  font-weight: bold;
;
`;

export const RestaurantListSub = styled.div`
  padding-left: 5px;
  font-size: 12pt;
  color: gray;
`;

import styled from "@emotion/styled";


export const CategoriesWrapper = styled.div`
  margin-top: 60px;
  margin-left: auto;  // 왼쪽 여백 자동
  margin-right: auto; // 오른쪽 여백 자동
  max-width: 1320px;  // (400px 박스 너비 + 10px gap) * 4
  display: grid;
  grid-template-columns: repeat(4, 325px);
  gap: 5px;
  overflow: hidden;
  margin-bottom: 80px;
`;
export const CategoryBox = styled.div`
  border-radius: 15px;
  min-width: 325px;
  height: 200px;
  display: flex;
  background-color: white;
  border: 1px solid black;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  font-size: 72px;
  
`;

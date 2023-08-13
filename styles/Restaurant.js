import styled from "@emotion/styled";

export const RestaurantWrapper = styled.div`
  width: 100%;
  min-width: 1300px;
  height: 600px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const RestaurantInner = styled.div`
  padding-top: 10px;
  width: 1300px;
  height: 600px;
  background: white;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
`;

export const RestaurantTitle = styled.div`
  font-size: 72pt;
  display: flex;
`;

export const StarWrapper = styled.div`
  padding: 0px 30px 0px 30px;
  width: 700px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`
export const StarImg = styled.div`
  background:  url('/home/OneStar.png') center/cover no-repeat;
  width: 100px;
  height: 100px;
`
export const HalfStarImg = styled.div`
  background:  url('/home/HalfStar.png') center/cover no-repeat;
  width: 100px;
  height: 100px;
`

export const StarNum = styled.div`
  font-size: 40px;
`
export const RestaurantSubTitle = styled.div`
  font-size: 28pt;
  color:gray
`;

export const RestaurantNavWrapper = styled.div`
  width: 100%;
  min-width: 1300px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

export const RestaurantNavInner = styled.div`
  width: 720px;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  border: 1px solid gray;
`;
export const RestaurantNavBlock = styled.div`
  width: 230px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;  
  border-radius: 20px;
  font-size: 30px;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  min-width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;  
  margin-bottom: 80px;
`;

export const MenuWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  width: 1000px;
  min-height: 300px;
  border-radius: 20px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

export const MenuInner = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center; 
  margin-bottom: 20px;
`;

export const MenuImg = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: calc(800px - (150px + 630px));
`;

export const MenuItem = styled.div`
  width: 630px;
  height: 150px;
  border-radius: 10px;
  border: 1px solid gray;
`;

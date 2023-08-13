import React from "react";
import { useRouter } from "next/router";
import { CategoryBox } from "../../styles/FoodCategories";


export default function CategoryBoxPage() {
  const router = useRouter();

  const onClickFoodCategory = () => {
    router.push("/RestaurantListPage");
  };

  return (
    <>
      <CategoryBox onClick={onClickFoodCategory}>이미지</CategoryBox>
    </>
  );
}

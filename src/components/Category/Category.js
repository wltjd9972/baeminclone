import React from "react";
import CategoryBoxPage from "./CategoryBox";

import {
  CategoriesWrapper,
} from "../../styles/FoodCategories";

export default function Category() {

  return(
    <>
      <CategoriesWrapper>
        <CategoryBoxPage />
      </CategoriesWrapper>
    </>
  )
}
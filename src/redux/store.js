import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import userReducer from "./features/user/userSlice";
import productCategoryReducer from "./features/productCategory/productCategorySlice";

export const store = configureStore({
  reducer: {
    user : userReducer,
    products : productReducer,
    productsCategory : productCategoryReducer,
    
  },
});

export default store;

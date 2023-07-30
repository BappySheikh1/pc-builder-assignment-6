import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/product/productSlice";
import productsCatagoryReducer from "./features/productCatagory/productCatagorySlice";
import userReducer from "./features/user/userSlice";
import addToBuildReducer from "./features/addToBuild/addToBuildSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    productsCatagory: productsCatagoryReducer,
    addToBuild: addToBuildReducer,
  },
});

export default store;

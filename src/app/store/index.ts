import { wishListApi } from "@/widgets/cartList/model";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [wishListApi.reducerPath]: wishListApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(wishListApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

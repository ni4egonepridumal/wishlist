import { onePresentApi } from "@/pages/OnePresent/model";
import { wishListApi } from "@/widgets/cartList/model";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [wishListApi.reducerPath]: wishListApi.reducer,
    [onePresentApi.reducerPath]: onePresentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(wishListApi.middleware)
      .concat(onePresentApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

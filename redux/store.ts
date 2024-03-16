import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { AuthApi } from "./queries/Auth.query"
import { UserSlice } from "./Slices/user.slice"
import { ProductApi } from "./queries/Product.query"
import { AddToCartApi } from "./queries/AddToCart"

export const store = configureStore({
    reducer:{
        [AuthApi.reducerPath]:AuthApi.reducer,
        [UserSlice.name]:UserSlice.reducer,
        [ProductApi.reducerPath]:ProductApi.reducer,
        [AddToCartApi.reducerPath]:AddToCartApi.reducer
    },
    middleware:(g)=>g().concat(AuthApi.middleware,ProductApi.middleware,AddToCartApi.middleware)
})


setupListeners(store.dispatch)
import { configureStore } from "@reduxjs/toolkit";
import productsGlobal from './slices/products.slice'

const store = configureStore ({
    reducer: {
        productsGlobal
    }
})
export default store

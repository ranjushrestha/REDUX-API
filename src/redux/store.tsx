import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './features/searchSlice'
import collectionReducer from './features/collectionSlice'

export const store = configureStore({
    reducer:{
        search: searchReducer,
        collection:collectionReducer
    }

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
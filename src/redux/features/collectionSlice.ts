import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CollectionItem = {
  id: string | number;
  title: string | null;
  thumbnail: string;
  src: string;
  type: "photo" | "video";
  url?: string
};

type CollectionState = {
  items: CollectionItem[];
};

const savedCollection = localStorage.getItem("collection");

const initialState: CollectionState = {
  items: savedCollection ? JSON.parse(savedCollection) : [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action: PayloadAction<CollectionItem>) => {
      const alreadyExist = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!alreadyExist) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },

    removeCollection: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem("collection", JSON.stringify(state.items));
    },

    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collection");
    },
  },
});

export const {
  addCollection,
  removeCollection,
  clearCollection,
} = collectionSlice.actions;

export default collectionSlice.reducer;
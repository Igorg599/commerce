import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { IMenuItem } from "../../types"

export const fetchDataMenu = () => async () => {
  const response = await axios("http://jsonplaceholder.typicode.com/photos")
    .then((data) => {
      console.log(data.data)
      localStorage.setItem("menu", JSON.stringify(data.data))
      return data.data
    })
    .catch((err) => console.log(err))

  return response
}

export interface SliceState {
  items: null | Array<IMenuItem> | undefined
}

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    items: null,
  } as SliceState,
  reducers: {
    loadMenu(state, action) {
      state.items = action.payload
    },
    removeItem(state, action) {
      const newItems = state.items?.filter((item) => item.id !== action.payload)
      state.items = newItems
    },
  },
})

export const { loadMenu, removeItem } = menuSlice.actions
export default menuSlice.reducer

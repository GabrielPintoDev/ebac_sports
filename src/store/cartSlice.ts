import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types'

type CartState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CartState = {
  itens: [],
  favoritos: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Produto>) => {
      const item = state.itens.find((p) => p.id === action.payload.id)
      if (!item) {
        state.itens.push(action.payload)
      } else {
        alert('Item já adicionado')
      }
    },
    toggleFavorite: (state, action: PayloadAction<Produto>) => {
      const exists = state.favoritos.find((p) => p.id === action.payload.id)
      if (exists) {
        state.favoritos = state.favoritos.filter(
          (p) => p.id !== action.payload.id
        )
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const { addToCart, toggleFavorite } = cartSlice.actions
export default cartSlice.reducer

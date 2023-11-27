import { types } from '../types/types'

export const setError = err => ({
  type: types.uiSetError,
  payload: err,
})

export const removeError = () => ({
  type: types.uiRemoveError,
})

export const uiStartLoading = () => ({
  type: types.uiStartLoading,
})

export const uiFinishLoading = () => ({
  type: types.uiFinishLoading,
})

export const uiOpenSidebar = () => ({
  type: types.uiOpenSidebar,
})

export const uiCloseSidebar = () => ({
  type: types.uiCloseSidebar,
})

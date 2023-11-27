/*
  El state va a estar vacio cuando no este autenticado.
  Cuando este autenticado voy a tener un uid:
    {
      uid: 2434345453463,
      name: 'John Doe'
    }
*/

import { types } from '../types/types'

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      }
    case types.logout:
      return {}
    default:
      return state
  }
}

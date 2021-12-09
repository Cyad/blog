import produce, { enableES5 } from 'immer'

enableES5() // 兼容IE

// Actions Types
export const types = {
  SAVE_USER_INFO: 'USER/SAVE_USER_INFO',
  SAVE_LOGIN_STATUS: 'USER/SAVE_LOGIN_STATUS'
}

// Reducer
const initState = {
  userInfo: {},
  isLogin: false
}

export interface ActionProps {
    type: string;
    data: any;
}

export function reducer(state = initState, action:ActionProps) {
  switch (action.type) {
    case types.SAVE_USER_INFO:
      return produce(state, draft => {
        draft.userInfo = action.data
      })
    case types.SAVE_LOGIN_STATUS:
      return produce(state, draft => {
        draft.isLogin = action.data
      })
    default:
      return state
  }
}


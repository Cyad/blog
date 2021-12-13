import produce, { enableES5 } from 'immer'

enableES5() // 兼容IE

// Actions Types
export const types = {
    CHANGE_THEME: 'CHANGE_THEME'
}

// Reducer
const initState = {
    theme: false
}

export interface ActionProps {
    type: string;
    data: any;
}

export function reducer(state = initState, action:ActionProps) {
  switch (action.type) {
    case types.CHANGE_THEME:
      return produce(state, draft => {
      })
    default:
      return state
  }
}


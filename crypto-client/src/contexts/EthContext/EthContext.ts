import { createContext } from 'react'
import type { EthAction, EthState } from './ethState'

const EthContext = createContext({
  state: {} as EthState,
  dispatch: (action: EthAction) => {
    console.log(action)
  },
})

export default EthContext

import type { Contract } from 'ethers'
import type Web3 from 'web3'
import type { Contract as Web3Contract } from 'web3-eth-contract'

export const initialEthState = {
  artifacts: [] as Contract[],
  web3: {} as Web3,
  accounts: [],
  networkID: null,
  contracts: {} as Record<string, Web3Contract>,
}
type ActionKeys = keyof typeof ethActions
type Actions = typeof ethActions[ActionKeys]
export type EthState = {
  artifacts: Contract[]
  web3: Web3
  accounts: string[]
  networkID: number | null
  contracts: Record<string, Web3Contract>
}

export type EthAction = {
  type: Actions
  payload: EthState
}
export const ethActions = {
  init: 'INIT',
}
export const ethReducer = (state: EthState, action: EthAction) => {
  const { type, payload } = action
  switch (type) {
    case ethActions.init:
      return { ...state, ...payload }
    default:
      throw new Error('Undefined reducer action type')
  }
}

import type { FC, ReactNode} from 'react';
import React, { useCallback, useEffect, useReducer } from 'react';
import { ethActions, ethReducer, initialEthState } from './ethState'
import Web3 from "web3";
import type { Contract } from 'ethers'
import EthContext from './EthContext'
import { isEmpty } from 'ramda'
import type { Contract as Web3Contract } from 'web3-eth-contract'

const EthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(ethReducer, initialEthState)
  const init = useCallback(async (artifacts: Contract[]) => {
    if (isEmpty(artifacts)) {
      return
    }
    const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545')
    console.log(typeof web3)
    const accounts = await web3.eth.requestAccounts()
    const networkID = await web3.eth.net.getId()

    const contracts: Record<string, Web3Contract> = {}
    try {
      artifacts.forEach((artifact: Contract) => {
        const { abi, contractName } = artifact
        const address = artifact.networks[networkID].address
        contracts[contractName] = new web3.eth.Contract(abi, address)
      })

    } catch (e) {
      console.error(e)
    }
    dispatch({
      type: ethActions.init,
      payload: { artifacts, web3, accounts, networkID, contracts }
    })
  }, [])
  useEffect(() => {
    const tryInit = async () => {
      try {

      } catch (e) {
        console.error(e)
      }
    }
    // tryInit()
  }, [init])
  useEffect(() => {
    const events = ["chainChanged", "accountsChanged"];
    const handleChange = () => {
      init(state.artifacts);
    };

    events.forEach(e => (window as any).ethereum.on(e, handleChange));
    return () => {
      events.forEach(e => (window as any).ethereum.removeListener(e, handleChange));
    };
  }, [init, state.artifacts]);
  return (
    <EthContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </EthContext.Provider>
  );
};

export default EthProvider;
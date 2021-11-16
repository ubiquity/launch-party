import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Ubiquity } from '../../ubiquity'

export interface UbiquityContext {
  ubiquity?: typeof Ubiquity
}

export const Context = createContext<UbiquityContext>({
  ubiquity: undefined,
})

declare global {
  interface Window {
    ubiquitysauce: any
  }
}

const UbiquityProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [ubiquity, setUbiquity] = useState<any>()

  // @ts-ignore
  window.ubiquity = ubiquity
  // @ts-ignore
  window.eth = ethereum

  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const ubiquityLib = new Ubiquity(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setUbiquity(ubiquityLib)
      window.ubiquitysauce = ubiquityLib
    }
  }, [ethereum])

  return <Context.Provider value={{ ubiquity }}>{children}</Context.Provider>
}

export default UbiquityProvider

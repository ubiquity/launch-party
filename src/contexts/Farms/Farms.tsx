import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useUbiquity from '../../hooks/useUbiquity'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../ubiquity/utils'
import { getFarms } from '../../ubiquity/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const sushi = useUbiquity()
  const { account } = useWallet()

  const farms = getFarms(sushi)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms

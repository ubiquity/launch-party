import { useCallback } from 'react'

import useUbiquity from './useUbiquity'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../ubiquity/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const sushi = useUbiquity()
  const masterChefContract = getMasterChefContract(sushi)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, sushi],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake

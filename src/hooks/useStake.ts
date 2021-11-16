import { useCallback } from 'react'

import useUbiquity from './useUbiquity'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../ubiquity/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const sushi = useUbiquity()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(sushi),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, sushi],
  )

  return { onStake: handleStake }
}

export default useStake

import { useCallback } from 'react'

import useUbiquity from './useUbiquity'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../ubiquity/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const sushi = useUbiquity()
  const masterChefContract = getMasterChefContract(sushi)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, sushi])

  return { onReward: handleReward }
}

export default useReward

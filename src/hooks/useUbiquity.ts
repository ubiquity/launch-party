import { useContext } from 'react'
import { Context } from '../contexts/UbiquityProvider'

const useUbiquity = () => {
  const { ubiquity } = useContext(Context)
  return ubiquity
}

export default useUbiquity

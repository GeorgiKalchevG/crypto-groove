import React from 'react'
import { NextPage } from 'next'
import { useConnectWallet } from '@web3-onboard/react'

const MyNfts: NextPage = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  console.log(wallet)
  return <div>My NFTS</div>
}

export default MyNfts

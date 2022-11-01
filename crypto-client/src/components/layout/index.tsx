import React, { FC, ReactNode, useRef, useState } from 'react'
import styles from '@pages/index.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.svg'
import { useConnectWallet } from '@web3-onboard/react'
import { ethers } from 'ethers'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  let ethersProvider
  let transactionsContract
  if (wallet) {
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
    console.log(ethersProvider)
  }
  return (
    <>
      <div className={styles.containerOuter}>
        <header
          className={`${styles.header} bg-background-secondary shadow shadow-background-tertiary z-40 p-6 flex flex-row items-center justify-between`}>
          <div>
            <Link href="/">
              <Image src={logo} alt="logo" height={42} width={42} />
            </Link>
          </div>
          <div>

          </div>
          <div className={'flex flex-row justify-between w-1/2 px-12'}>
            <Link className="px-3" href={'/mint'}>
              Mint NFT
            </Link>
            <div className={'border-r border-background-tertiary h-6'} />
            <Link className="px-3" href={'/my-nfts'}>
              My NFTs
            </Link>
            <div className={'border-r border-background-tertiary h-6'} />
            <Link className="px-3" href={'/market'}>
              Market
            </Link>
            <div className={'border-r border-background-tertiary h-6'} />
            <Link className="px-3" href={'/about'}>
              About
            </Link>
            <div className={'border-r border-background-tertiary h-6'} />
            <button
              disabled={connecting}
              onClick={() => (wallet ? disconnect(wallet) : connect())}>
              {connecting ? 'Connecting' : wallet ? 'Disconnect' : 'Connect'}
            </button>
          </div>
        </header>
        <div className={`${styles.containerInner}`}>{children}</div>
        <footer
          className={
            'w-full h-64 shadow shadow-background-tertiary bg-background-tertiary text-background-secondary p-3'
          }>
          <a href="https://github.com/GeorgiKalchevG/crypto-groove">
            <h2>Github</h2>
          </a>
        </footer>
      </div>
    </>
  )
}

export default Layout

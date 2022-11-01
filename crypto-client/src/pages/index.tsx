import { type NextPage } from 'next'
import styles from './index.module.scss'
import Card from '@/components/card/Card'
import Link from 'next/link'
import React from 'react'

const Home: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>Groove Token Launch Pad</h1>
      <h3 className={styles.subtitle}>This is the place of the groove NFTs</h3>
      <div className={styles.cardGrid}>
        <Link href={'/mint'}>
          <Card
            name="Mint NFT"
            description="See how to become eligible to mint one of the Groove NFTs "
          />
        </Link>
        <Card
          name="Sell, Stake and Trade"
          description="Use your NFT to make some money"
          withLink
          linkName="OpenSea"
          linkHref="https://www.opensea.com"
        />
      </div>
    </>
  )
}

export default Home

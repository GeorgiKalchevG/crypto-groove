import { type AppType } from 'next/dist/shared/lib/utils'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Layout from '@components/layout'
import EthProvider from '@contexts/EthContext/EthProvider'
import injectedModule from '@web3-onboard/injected-wallets'
import { init } from '@web3-onboard/react'

const injected = injectedModule()

const chains = [
  {
    id: '0x5',
    token: 'gETH',
    label: 'Ethereum Goerli',
    rpcUrl: 'https://eth-goerli.public.blastapi.io',
  },
  {
    id: '0x38',
    token: 'BNB',
    label: 'Binance',
    rpcUrl: 'https://bsc-dataseed.binance.org/',
  },
  {
    id: '0x89',
    token: 'MATIC',
    label: 'Polygon',
    rpcUrl: 'https://matic-mainnet.chainstacklabs.com',
  },
  {
    id: '0xfa',
    token: 'FTM',
    label: 'Fantom',
    rpcUrl: 'https://rpc.ftm.tools/',
  },
  {
    id: '0x539',
    token: 'FTM',
    label: 'development',
    rpcUrl: 'https://localhost:8584',
  },
]
init({
  wallets: [injected],
  chains,
})
declare global {
  interface Window {
    ethereum?: any
  }
}
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <EthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </EthProvider>
  )
}

export default MyApp

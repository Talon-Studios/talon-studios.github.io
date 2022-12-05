import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import TitleBar from './components/TitleBar'

const Home: NextPage = () => {
  return (
    <div>
			<Head>
				<title>Talon Studios</title>
			</Head>
			
      <TitleBar/>
    </div>
  )
}

export default Home

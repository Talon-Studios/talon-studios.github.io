import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import TitleBar from './components/TitleBar'
import Footer from './components/Footer'
import CardGallery from './components/CardGallery'

const Home: NextPage = () => {
  return (
    <div>
			<Head>
				<title>Talon Studios</title>
        <meta name="description" content="We are a small indie game studio." />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/c3b7daf096.js" crossOrigin="anonymous"></script>
			</Head>
			
      <TitleBar/>

      <div className='mb-12'></div>

      <CardGallery></CardGallery>
      
      <Footer/>
    </div>
  )
}

export default Home

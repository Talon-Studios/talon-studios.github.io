import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import logo from '../../public/logo.png'

function TitleBar() {
	return (
		<a href='./' className='flex flex-row text-center justify-center items-center m-5'>
			<Image src={logo} alt='Talon Studios Logo' width={100} className='mr-5'/>
			<p className='text-7xl font-odibee text-accent'>Talon Studios</p>
		</a>
	)
}

export default TitleBar

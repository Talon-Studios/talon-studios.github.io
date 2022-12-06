import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import logo from '../../public/logo.png'

function TitleBar() {
	return (
		<div className='bg-background-light p-5 shadow-xl'>
			<a href='./' className='flex flex-row text-center justify-center items-center'>
				<Image src={logo} alt='Talon Studios Logo' className='mr-5 w-[75px] sm:w-[80px]'/>
				<p className='text-6xl font-odibee text-accent hidden sm:flex'>Talon Studios</p>
			</a>
		</div>
	)
}

export default TitleBar

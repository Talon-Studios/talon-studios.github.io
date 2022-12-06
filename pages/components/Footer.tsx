import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

function Footer() {
	return (
		<div className='flex flex-row bg-secondary-accent p-5 justify-evenly font-abel text-lg pr-[350px] pl-[350px]'>
			<a href="https://github.com/Talon-Studios">GitHub</a>
			<a href="mailto:talonstudiosgames@gmail.com">Email Us</a>
			<a href="https://talon-studios.itch.io/">Itch.io</a>
		</div>
	)
}

export default Footer

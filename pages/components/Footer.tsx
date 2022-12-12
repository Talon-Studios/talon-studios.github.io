import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

function Footer() {
	const floatHoverEffect = 'transition hover:bg-secondary-accent hover:-translate-y-1'

	return (
		<div className='flex flex-row bg-secondary-accent p-5 justify-evenly font-abel text-lg'>
			<a href="https://talon-studios.itch.io/" target='_blank' className={floatHoverEffect}><i className="fa-brands fa-itch-io"></i> Itch.io</a>
			<a href="https://github.com/Talon-Studios" target='_blank' className={floatHoverEffect}><i className="fa-brands fa-github"></i> GitHub</a>
			<a href="mailto:talonstudiosgames@gmail.com" target='_blank' className={floatHoverEffect}><i className="fa-solid fa-envelope"></i> Email Us</a>
		</div>
	)
}

export default Footer

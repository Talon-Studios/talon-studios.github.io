import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Button from './Button'

function Card({title, image, link, children}: any) {
	return (
		<div className='flex flex-col text-center justify-center items-center bg-background-light p-5 rounded-md w-card mb-12 font-abel'>
      <a href={link} target='_blank'><Image src={image} alt='Cover Image' className='mb-5 w-card-image' /></a>
      <a href={link} target='_blank' className='font-bold text-xl text-secondary-accent hover:underline'>{title}</a>
      <p className='mb-2'>{children}</p>
      <Button link='/'>Play on Itch.io</Button>
    </div>
	)
}

export default Card

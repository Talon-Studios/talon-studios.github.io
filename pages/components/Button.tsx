import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

function Button({link, children}: any) {
	return (
    <a href={link} target='_blank' className='bg-accent p-2 rounded-md transition hover:bg-secondary-accent'>{children}</a>
	)
}

export default Button

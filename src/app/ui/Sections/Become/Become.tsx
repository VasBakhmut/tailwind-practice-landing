import React from 'react'
import { Open_Sans } from 'next/font/google'

const openFont = Open_Sans({
	weight: ['400', '600', '700'],
	subsets: ['latin'],
})

function Become() {
	return (
		<section
			className="bg-[url('/Img/Photo2.jpg')] bg-no-repeat bg-cover bg-center flex flex-col items-center "
			style={{ boxShadow: '0px 0px 20px 0px #00000080' }}
		>
			<h2 className=' text-white font-bold text-6xl  text-center px-4   mt-96 mb-6'>
				Become more than you are.
			</h2>
			<p
				className={`${openFont.className} text-white text-center font-semibold text-lg w-full max-w-[480px] mb-6`}
			>
				Staying active is great fun and keeps you healthy. Check out how you can
				join in.
			</p>
			<button className='text-white mb-60 border border-pink-600 bg-pink-600 px-20 py-4 rounded-[38px]'>
				Let’s do it!
			</button>
			<p className='text-white mb-7'>pagination</p>
		</section>
	)
}

export default Become

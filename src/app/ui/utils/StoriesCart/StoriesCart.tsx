import React from 'react'
import Image, { StaticImageData } from 'next/image'

import CommasSvg from '../../../../../public/svg/Real-stories-copy.svg'

interface IProp {
	comments: Card
}

interface Card {
	title: string
	text: string
	name: string
	occupation: string
	photo: StaticImageData
	w: string
	h: string
}

function StoriesCart({ comments }: IProp) {
	return (
		<div
			className='shadow-custom px-6 py-9 pb bg-white rounded-lg  '
			style={{ width: comments.w, height: comments.h }}
		>
			<h3 className='font-semibold text-pink-600 text-4xl mb-4 '>
				{comments.title}
			</h3>
			<div className='flex gap-1 mb-4'>
				<CommasSvg />
				<p className='px-2 w-full font-normal text-lg mb-5'>{comments.text}</p>
			</div>
			<div className='flex gap-6 m-0 mx-auto items-center pl-8'>
				<Image src={comments.photo} alt='photo' />
				<div>
					<p className='text-[#424242] font-semibold text-lg'>
						{comments.name}
					</p>
					<p className='text-[#969BAB] text-sm'>{comments.occupation}</p>
				</div>
			</div>
		</div>
	)
}

export default StoriesCart

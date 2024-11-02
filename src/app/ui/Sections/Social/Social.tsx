import React from 'react'

import FBSvg from '../../../../../public/svg/FBSocial.svg'
import YouTubeSvg from '../../../../../public/svg/YouTubeSocial.svg'
import InstagramSvg from '../../../../../public/svg/InstaSocial.svg'

function Social() {
	return (
		<section className='bg-gray-200 flex items-center gap-4 flex-col pb-16'>
			<h2 className='font-bold text-pink-600 text-4xl pt-16'>Social</h2>
			<div className='flex gap-8 sm:gap-20 my-4'>
				<button className='flex justify-center items-center sm:w-[110px] sm:h-[110px] w-[75px] h-[75px]  rounded-full bg-white'>
					<FBSvg />
				</button>
				<button className='flex justify-center items-center sm:w-[110px] sm:h-[110px] w-[75px] h-[75px]  rounded-full bg-white'>
					<YouTubeSvg />
				</button>
				<button className='flex justify-center items-center sm:w-[110px] sm:h-[110px] w-[75px] h-[75px]  rounded-full bg-white'>
					<InstagramSvg />
				</button>
			</div>
		</section>
	)
}

export default Social

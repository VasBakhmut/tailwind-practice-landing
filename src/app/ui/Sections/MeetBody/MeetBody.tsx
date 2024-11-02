import React from 'react'
import Image from 'next/image'

import Photo1 from '../../../../../public/Img/Photo2.jpg'
import Photo2 from '../../../../../public/Img/Photo5a.jpg'

function MeetBody() {
	return (
		<section className='flex justify-center items-center xl:gap-44 gap-24 px-4  flex-col md:flex-row mt-24 mb-32'>
			<div className='relative w-full max-w-[439px] h-[503px]'>
				<Image src={Photo2} alt='Photo2' className='absolute left top' />
				<Image
					src={Photo1}
					alt='Photo1'
					width={241}
					height={359}
					className='absolute right-0 bottom-0'
				/>
			</div>
			<div className='flex items-center justify-center flex-col md:block'>
				<h2 className='font-bold text-pink-600 text-4xl mb-2  w-full max-w-72 md:max-w-sm'>
					Meet your new body
				</h2>
				<p className='text-gray-700 w-full max-w-[540px] mb-8 text-base'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
					lectus urna. Nulla magna tortor, bibendum in molestie sed, gravida nec
					felis. Sed id egestasegestas risus, ut imperdiet augue.
				</p>
				<button
					className='text-pink-600 px-16 py-4 border border-pink-600 rounded-[38px]
				'
				>
					View the FAQ
				</button>
			</div>
		</section>
	)
}

export default MeetBody

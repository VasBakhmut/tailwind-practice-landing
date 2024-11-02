import React from 'react'
import Image from 'next/image'

import Photo1 from '../../../../../public/Img/Photo3.jpg'
import Photo2 from '../../../../../public/Img/Photo4.jpg'

function Facilities() {
	return (
		<section className='mt-[75px] lg:mt-[224px] mb-28 flex justify-center items-center flex-col-reverse lg:flex-row px-5 gap-10 lg:gap-[145px] relative'>
			<div className='flex flex-col justify-center lg:block'>
				<h2 className='text-pink-600 font-bold text-4xl mb-2'>
					Premium Facilities
				</h2>
				<p className='w-full max-w-[489px] mb-6'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
					lectus urna. Nulla magna tortor, bibendum in molestie sed, gravida nec
					felis. Sed id egestasegestas risus, ut imperdiet augue.
				</p>
				<button className='text-pink-600 px-[72px] py-4 border border-pink-600  rounded-[38px]'>
					Learn more
				</button>
			</div>
			<div className='w-full md:max-w-[572px] max-w-[300px] h-[198px] md:h-[435px] relative'>
				<Image
					src={Photo1}
					alt='Photo'
					className='absolute top-0 left-0 z-10 w-[202px] h-[135px] md:w-[444px] md:h-[296px] '
				/>
				<Image
					src={Photo2}
					alt='Photo'
					className='absolute bottom-0 right-0 w-[191px] h-[128px] md:w-[422px] md:h-[281px]'
				/>
			</div>
		</section>
	)
}

export default Facilities

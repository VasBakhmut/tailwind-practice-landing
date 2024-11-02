import React from 'react'
import Image from 'next/image'

import GooglePhoto from '../../../../../public/Img/Google-Play-Badge.png'
import ApplePhoto from '../../../../../public/Img/App-Store-Badge.png'
import PhoneMockup1 from '../../../../../public/Img/Phone-Mockup1.png'
import PhoneMockup2 from '../../../../../public/Img/Phone-Mockup2.png'

function OurApp() {
	return (
		<section className='bg-pink-600 flex flex-col lg:flex-row justify-center items-center gap-2 px-3  '>
			<div className='pt-[112px] pb-[76px] flex flex-col items-center lg:block'>
				<h3 className='text-white font-bold text-4xl mb-3'>
					Don’t forget our app
				</h3>
				<p className='text-white font-normal text-base mb-3 w-full max-w-[489px]'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
					lectus urna. Nulla magna tortor, bibendum in molestie sed, gravida nec
					felis. Sed id egestasegestas risus, ut imperdiet augue.
				</p>
				<p className='text-gray-300 font-normal text-base mb-2'>
					Download now:
				</p>
				<div className='flex gap-3'>
					<button>
						<Image src={GooglePhoto} alt='Google' />
					</button>
					<button>
						<Image src={ApplePhoto} alt='Apple' />
					</button>
				</div>
			</div>
			<div className='flex relative w-full max-w-[661px] h-full min-h-[491px]'>
				<Image
					src={PhoneMockup1}
					alt='Google'
					className='absolute top-[-40px] left-6 lg:left-0 w-[185px] h-[314px] sm:w-[292px] sm:h-[524px]'
				/>
				<Image
					src={PhoneMockup2}
					alt='Apple'
					className='absolute bottom-0 left-1/2 lg:left-[280px] w-[185px] h-[300px] sm:w-[292px] sm:h-[399px]'
				/>
			</div>
		</section>
	)
}

export default OurApp

import React from 'react'
import StoriesCart from '../../utils/StoriesCart/StoriesCart'

import { comments } from '@/app/data/comments'

function Stories() {
	return (
		<section className='bg-custom-gradient flex items-center justify-center lg:pt-32 pt-4 pb-20 gap-8 '>
			<div className='pl-4 flex flex-col items-center lg:block'>
				<h2 className='font-semibold text-3xl sm:text-5xl w-full max-w-[320px] sm:max-w-[414px] mb-4'>
					Real Stories from Real Customers
				</h2>
				<p className='mb-7 text-[#424242] text-lg'>
					Be inspired with these experiences.
				</p>
				<div className='lg:pl-20'>
					{comments[0] && <StoriesCart comments={comments[0]} />}
				</div>
			</div>
			<div className='lg:flex flex-col gap-8 pr-4 hidden'>
				{comments[1] && <StoriesCart comments={comments[1]} />}
				{comments[2] && <StoriesCart comments={comments[2]} />}
			</div>
		</section>
	)
}

export default Stories

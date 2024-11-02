import React from 'react'
import classes from './Hero.module.css'

function Hero() {
	return (
		<section className={classes.section}>
			<h1 className='text-4xl xl:text-[70px] xl:leading-[77px] font-bold w-full max-w-[770px] text-center pt-[285px] mb-6'>
				Welcome to Good
				<span className='text-4xl xl:text-7xl font-bold text-pink-200 '>
					lyfe
				</span>{' '}
				Gyms{' '}
			</h1>
			<button className='bg-pink-600 px-14 py-4 rounded-[38px] mb-40'>
				See the benefits
			</button>
			<span>pagination</span>
			<div className={classes.wave}></div>
		</section>
	)
}

export default Hero

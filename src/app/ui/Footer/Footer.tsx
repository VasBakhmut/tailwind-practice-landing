import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '../../../../public/Img/FooterLogo.png'

import InstaSvg from '../../../../public/svg/FooterInsta.svg'
import BollSvg from '../../../../public/svg/FooterSocBAll.svg'
import TwitSvg from '../../../../public/svg/FooterTwitt.svg'
import YouTubSvg from '../../../../public/svg/FooterYouTube.svg'
import DividerSvg from '../../../../public/svg/divider.svg'
import PinSvg from '../../../../public/svg/LocationIcon.svg'
import PhoneSvg from '../../../../public/svg/PhoneIcon.svg'
import EmailSvg from '../../../../public/svg/EmailIcon.svg'

const qckLinks: string[] = [
	'Classes',
	'Timetable',
	'Clubs',
	'Nutrition',
	'Free Trial',
]

const guides: string[] = [
	'Weight Loss',
	'Strength Gain',
	'Crossfit',
	'Washbaord Abs',
	'Dieting',
]

function Footer() {
	return (
		<footer className='bg-[#0B0D17] pt-24 px-3'>
			<div className='flex justify-center flex-col md:flex-row pl-12 md:p-0'>
				<div className='mr-20 mb-6 md:mb-0'>
					<Image src={Logo} alt='Logo' className='mb-6' />
					<p className='text-[#D9DBE1] font-normal text-sm w-full mb-6'>
						Lorem ipsum dolor amet, consectetur <br /> adipiscing elit. Eget
						nisl nunc quam ac <br /> sed turpis volutpat. Cursus sed massa{' '}
						<br /> non nisi, placerat.
					</p>
					<div className='flex gap-4 items-center'>
						<Link
							className='flex justify-center items-center w-6 h-6 bg-gray-800 rounded-full'
							href={'/'}
						>
							<InstaSvg />
						</Link>
						<Link
							className='flex justify-center items-center w-6 h-6 bg-gray-800 rounded-full'
							href={'/'}
						>
							<BollSvg />
						</Link>
						<Link
							className='flex justify-center items-center w-6 h-6 bg-gray-800 rounded-full'
							href={'/'}
						>
							<TwitSvg />
						</Link>
						<Link
							className='flex justify-center items-center w-6 h-6 bg-gray-800 rounded-full'
							href={'/'}
						>
							<YouTubSvg />
						</Link>
					</div>
				</div>
				<nav className='mr-14 lg:mr-44 mb-6 md:mb-0'>
					<h3 className='text-white font-semibold text-xl mb-6'>Quick Links</h3>
					<ul className='flex flex-col gap-3'>
						{qckLinks.map((link, index) => (
							<li key={index}>
								<Link className='text-[#D9DBE1] font-normal text-sm' href={'/'}>
									{link}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<nav className='mr-14 lg:mr-44 mb-6 md:mb-0'>
					<h3 className='text-white font-semibold text-xl mb-6'>Guides</h3>
					<ul className='flex flex-col gap-3'>
						{guides.map((link, index) => (
							<li key={index}>
								<Link className='text-[#D9DBE1] font-normal text-sm' href={'/'}>
									{link}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<nav>
					<h3 className='text-white font-semibold text-xl mb-6'>Reach us</h3>
					<ul className='flex flex-col gap-8'>
						<li>
							<Link
								className='text-[#D9DBE1] font-normal text-sm flex items-center gap-3'
								href={'/'}
							>
								<EmailSvg />
								admin@goodlyfe.co
							</Link>
						</li>
						<li>
							<Link
								className='text-[#D9DBE1] font-normal text-sm flex items-center gap-3'
								href={'/'}
							>
								<PhoneSvg />
								+88 98765 43210
							</Link>
						</li>
						<li>
							<Link
								className='text-[#D9DBE1] font-normal text-sm flex items-center gap-3 '
								href={'/'}
							>
								<PinSvg />
								<span className='text-[#D9DBE1] font-normal text-sm w-full max-w-[125px]'>
									90210 Beverly Hills California USA
								</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className='flex justify-center items-center  md:justify-between m-0 mx-auto  w-full max-w-[1280px] mt-28 flex-col-reverse md:flex-row pb-6'>
				<p className='text-[#D9DBE1] font-normal text-sm'>
					© 2020 GoodLyfe. All rights reserved
				</p>
				<div className=' flex gap-2 items-center flex-wrap justify-center'>
					<Link className='text-[#D9DBE1] font-normal text-sm' href={'/'}>
						Terms & Conditions
					</Link>
					<DividerSvg />
					<Link className='text-[#D9DBE1] font-normal text-sm' href={'/'}>
						Privacy Policy
					</Link>
					<DividerSvg />
					<Link className='text-[#D9DBE1] font-normal text-sm' href={'/'}>
						Sitemap
					</Link>
					<DividerSvg />
					<Link className='text-[#D9DBE1] font-normal text-sm' href={'/'}>
						Disclaimer
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer

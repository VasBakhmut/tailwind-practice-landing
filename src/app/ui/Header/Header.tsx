import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '../../../../public/Img/LogoMain.png'

import SearchIcon from '../../../../public/svg/Search Icon.svg'
import SearchIconMob from '../../../../public/svg/Search Icon Mob.svg'
import BurgerIcon from '../../../../public/svg/menu-burger.svg'

function Header() {
	return (
		<>
			<header className='hidden bg-pink-600 w-full lg:flex justify-center items-center pt-8 pb-6 '>
				<Image src={Logo} alt='Logo' className='h-10 ml-4' />
				<nav>
					<ul className='flex gap-[24px] xl:gap-[56px] 2xl:gap-[76px] ml-[56px] 2xl:ml-[172px] xl:ml-[156px] xl:mr-[76px] mr-[36px]'>
						<li>
							<Link href={'/home'} className='text-base font-normal text-white'>
								Classes
							</Link>
						</li>
						<li>
							<Link href={'/home'} className='text-base font-normal text-white'>
								Timetable
							</Link>
						</li>
						<li>
							<Link href={'/home'} className='text-base font-normal text-white'>
								Clubs
							</Link>
						</li>
						<li>
							<Link href={'/home'} className='text-base font-normal text-white'>
								Nutrition
							</Link>
						</li>
						<li>
							<Link href={'/home'} className='text-base font-normal text-white'>
								Free Trial
							</Link>
						</li>
					</ul>
				</nav>
				<div className='flex items-center'>
					<button className='text-base font-normal text-white flex items-center mr-[36px] gap-1'>
						Search <SearchIcon />
					</button>
					<button className='bg-white text-pink-600 px-[61px] py-4 rounded-[200px] mr-4'>
						Login
					</button>
				</div>
			</header>
			<header className='bg-pink-600 pt-5 pb-4 lg:hidden flex items-center justify-between'>
				<Image src={Logo} alt='Logo' className='w-28 h-7 ml-4' />
				<div className='flex items-center mr-4 gap-6'>
					<button>
						<SearchIconMob />
					</button>
					<button>
						<BurgerIcon />
					</button>
				</div>
			</header>
		</>
	)
}

export default Header

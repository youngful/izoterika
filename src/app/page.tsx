import { About, Start } from '../sections/index'

export default function Home() {
	return (
		<div className='relative max-w-[1920px] mx-auto'>
			<div className='hidden xl:block w-[200px] absolute bg-gradient-to-l h-full left-0 from-transparent via-transparent to-white blur-xs'></div>

			<div className='hidden xl:block  w-[200px] absolute bg-gradient-to-r h-full right-0 from-transparent via-transparent to-white blur-xs '></div>
			<Start />

			<About />
		</div>
	)
}

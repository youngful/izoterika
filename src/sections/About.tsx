import { Modules, Tariffs, Reviews } from '../components/index'
import { ModuleList, TariffList, ReviewList } from '../data/index'
import Image from 'next/image'

export default function About() {
	return (
		<section>
			<div className='container'>
				<h2 className='uppercase gradient_text text-center mb-[56px]'>
					Програма курсу
				</h2>

				<div className='mb-[96px]'>
					<Modules cards={ModuleList} />
				</div>

				<h2 className='uppercase gradient_text text-center mb-[96px]'>
					Тарифи
				</h2>

				<div className='relative mb-[140px]'>
					<Image
						src={'/images/assets-06.png'}
						width={180}
						height={180}
						alt='star'
						className='absolute z-10 top-[30px] translate-y-[-50%] 2xs:right-[-10%] xs:right-[-50px] 2xs:w-[100px] sm:right-[-56px] sm:w-[180px] 2lg:left-[550px] translate-x-[-50%]'
					/>

					<Image
						src={'/images/assets-07.png'}
						width={161}
						height={210}
						alt='star'
						className='2xs:hidden z-10 top-[20%] blur-sm translate-y-[-50%] right-[400px] 2lg:block 2lg:absolute translate-x-[-50%]'
					/>

					<Image
						src={'/images/assets-07.png'}
						width={161}
						height={210}
						alt='star'
						className='absolute 2xs:w-[100px] 2xs:right-[auto] 2xs:bottom-[25%] sm:w-[161px] sm:left-[10%] 2lg:bottom-[30px] translate-y-[-50%] 2lg:left-[85%] 2lg:scale-x-[-1]'
					/>
					<Tariffs list={TariffList} />
				</div>
			</div>

			<h2 className='uppercase gradient_text text-center'>Відгуки</h2>

			<div
				className='bg-cover bg-center 2xs:mb-[40px] sm:mb-[96px] 2xs:py-[40px] lg:py-[90px]'
				style={{
					backgroundImage:
						"linear-gradient(to top, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('/images/assets-02.png')",
					backgroundSize: '100% 100%',
					backgroundPosition: 'center center',
				}}
			>
				<div className='container'>
					<Reviews reviews={ReviewList} />
				</div>
			</div>

			<div className='container'>
				<h2 className='uppercase gradient_text text-center 2xs:mb-[32px] md:mb-[92px] flex flex-col items-center gap-[50px]'>
					<Image
						src={'/images/assets-13.png'}
						width={440}
						height={58}
						alt='arrow'
					/>
					Контакти
				</h2>

				<div
					className='2xs:max-w-[400px] sm:max-w-[600px] mx-auto p-[44px] bg-cover bg-center text-white 2xs:mb-[32px] sm:mb-[64px] flex flex-col gap-[32px] rounded-[20px]'
					style={{
						backgroundImage: "url('/images/assets-14.png')",
					}}
				>
					<div className='2xs:py-[4px] sm:py-[8px] lg:py-[24px] 2xs:px-[48px] sm:px-[96px] w-full bg-[#0791d1] flex justify-center items-center gap-[8px] rounded-[16px] 2xs:text-[20px] sm:text-[40px] leading-[66px]'>
						<a href='#'>
							Telegram
						</a>
						<Image
							className='2xs:w-[24px] 2xs:h-[24px] sm:w-[44px] sm:h-[44px]'
							src={'/images/telegram.svg'}
							width={62}
							height={62}
							alt='telegram'
						/>
					</div>

					<div className='2xs:py-[4px] sm:py-[8px] lg:py-[24px] 2xs:px-[48px] sm:px-[96px] w-full bg-[#0766ff] flex justify-center items-center gap-[8px] rounded-[16px] 2xs:text-[20px] sm:text-[40px] leading-[66px]'>
						<a href='#'>
							Facebook
						</a>
						<Image
							className='2xs:w-[24px] 2xs:h-[24px] sm:w-[44px] sm:h-[44px]'
							src={'/images/facebook.svg'}
							width={62}
							height={62}
							alt='telegram'
						/>
					</div>

					<div className='2xs:py-[4px] sm:py-[8px] lg:py-[24px] 2xs:px-[48px] sm:px-[96px] w-full bg-gradient-to-br from-[#7919fe] via-[#fa373e] to-[#ff2467] flex justify-center items-center rounded-[16px] gap-[8px] 2xs:text-[20px] sm:text-[40px] leading-[66px]'>
						<a href='#'>
							Instagram
						</a>
						<Image
							className='2xs:w-[24px] 2xs:h-[24px] sm:w-[44px] sm:h-[44px]'
							src={'/images/instagram.svg'}
							width={62}
							height={62}
							alt='telegram'
						/>
					</div>
				</div>

				<p className='text-center 2xs:mb-[40px] sm:mb-[80px]'>
					Олександр Марченко. All right reserverd.
				</p>
			</div>
		</section>
	)
}

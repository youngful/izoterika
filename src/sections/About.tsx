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
				className='bg-cover bg-center mb-[96px] 2xs:py-[40px] lg:py-[90px]'
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
				<h2 className='uppercase gradient_text text-center mb-[92px] flex flex-col items-center gap-[50px]'>
					<Image
						src={'/images/assets-13.png'}
						width={440}
						height={58}
						alt='arrow'
					/>
					Контакти
				</h2>

				<div
					className='max-w-[600px] mx-auto p-[44px] bg-cover bg-center text-white mb-[100px] flex flex-col gap-[32px] rounded-[20px]'
					style={{
						backgroundImage: "url('/images/assets-14.png')",
					}}
				>
					<a
						href='#'
						className='2xs:py-[16px] sm:py-[32px] 2xs:px-[48px] sm:px-[96px] w-full bg-[#0791d1] flex justify-between items-center rounded-[16px] sm:text-[55px] leading-[66px]'
					>
						Telegram{' '}
						<Image
							className='2xs:w-[32px] h-[32px] sm:w-[62px] sm:h-[62px]'
							src={'/images/telegram.svg'}
							width={62}
							height={62}
							alt='telegram'
						/>
					</a>

					<a
						href='#'
						className='2xs:py-[16px] sm:py-[32px] 2xs:px-[48px] sm:px-[96px] w-full bg-[#0766ff] flex justify-between items-center rounded-[16px] sm:text-[55px] leading-[66px]'
					>
						Facebook{' '}
						<Image
							className='2xs:w-[32px] h-[32px] sm:w-[62px] sm:h-[62px]'
							src={'/images/facebook.svg'}
							width={62}
							height={62}
							alt='facebook'
						/>
					</a>

					<a
						href='#'
						className='2xs:py-[16px] sm:py-[32px] 2xs:px-[48px] sm:px-[96px] w-full bg-gradient-to-br from-[#7919fe] via-[#fa373e] to-[#ff2467] flex justify-between items-center rounded-[16px] sm:text-[55px] leading-[66px]'
					>
						Instagram{' '}
						<Image
							className='2xs:w-[32px] h-[32px] sm:w-[62px] sm:h-[62px]'
							src={'/images/instagram.svg'}
							width={62}
							height={62}
							alt='instagram'
						/>
					</a>
				</div>

				<p className='text-center mb-[112px]'>
					Олександр Марченко. All right reserverd.
				</p>
			</div>
		</section>
	)
}

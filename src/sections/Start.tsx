import Image from 'next/image'

export default function Start() {
	return (
		<section
			className='2xs:min-h-[100vh] 2xs:bg-contain bg-center mb-[56px] bg-no-repeat'
			style={{ backgroundImage: "url('/images/assets-01.png')" }}
		>
			<div className='container'>
				<div className='flex items-center 2xs:pt-[4px] xs:pt-[20px] justify-center font-[Playfair] text-[#00246D] 2xs:mb-[4px] xs:mb-[24px]'>
					<div className='flex flex-col items-center'>
						<p className='relative 2xs:pl-[20px] sm:pl-[50px] 2xs:text-[16px] sm:text-[32px] sm:mb-2'>
							<span className='2xs:text-[20px] sm:text-[54px] mr-2 absolute 2xs:top-[-6px] sm:top-[-16px] left-0'>
								13
							</span>
							модулів
						</p>
						<p className='text-[#000] 2xs:text-[8px] sm:text-[10px] leading-[12px]'>
							в програмі курсу
						</p>
					</div>

					<span className='w-[1px] 2xs:h-[32px] 2xs:mx-[32px] sm:mx-[66px] sm:h-[48px] bg-[#3C93B5]'></span>

					<div className='flex flex-col items-center'>
						<p className='relative 2xs:pl-[20px] sm:pl-[50px] 2xs:text-[16px] sm:text-[32px] sm:mb-2'>
							<span className='2xs:text-[20px] sm:text-[54px] mr-2 absolute 2xs:top-[-6px] sm:top-[-16px] left-0'>
								13
							</span>
							тижнів
						</p>
						<p className='text-[#000] 2xs:text-[8px] sm:text-[10px] leading-[12px]'>
							удосконалення
						</p>
					</div>
				</div>

				<h4 className='text-center text-[#000] 2xs:mb-[0px] xs:mb-[8px]'>
					Розкрий свою <b>внутрішню силу</b> в курсі
				</h4>

				<h1 className='uppercase text-center bg-gradient-to-r from-[#0f3a89] via-[#2795c2] to-[#0f3a89] text-transparent bg-clip-text'>
					Магія в
				</h1>

				<h1 className='uppercase text-center mb-[20px] gradient_text'>
					<i>реальності</i>
				</h1>

				<div className='relative md:pt-[50px] md:mb-[100px]'>
					<Image
						src={'/images/assets-08.png'}
						width={104}
						height={100}
						alt='icon'
						className='absolute 2xs:top-[-30%] sm:-top-[30%] md:-top-[35%] 2xs:-right-[0] md:right-[10%] lg:right-[20%]'
					/>

					<Image
						src={'/images/assets-09.png'}
						width={130}
						height={100}
						alt='icon'
						className='absolute -top-[50px] xs:left-[-20px] sm:left-[5%] lg:left-[15%]'
					/>

					<Image
						src={'/images/assets-10.png'}
						width={91}
						height={100}
						alt='icon'
						className='absolute top-[170px] xs:left-[10px] sm:left-[20%] lg:left-[25%] z-10'
					/>

					<Image
						src={'/images/assets-11.png'}
						width={94}
						height={100}
						alt='icon'
						className='absolute top-[50px] 2xs:right-[0] xs:right-[15%] lg:right-[30%] z-10'
					/>

					<Image
						src={'/images/assets-12.png'}
						width={110}
						height={100}
						alt='icon'
						className='absolute top-[200px] 2xs:right-[0] sm:right-[50px] lg:right-[25%] z-10'
					/>

					<Image
						src={'/images/assets-08.png'}
						width={120}
						height={100}
						alt='icon'
						className='hidden absolute top-[300px] sm:block md:left-[70px] lg:left-[20%] z-10'
					/>

					<p
						className='absolute bg-gradient-to-r from-white to-transparent 
    				md:from-transparent md:via-white md:to-transparent lg:px-[40px] py-[10px] top-[25%] transform translate-y-[-50%] font-[Savoye] text-[#022771] z-10 2xs:px-[5px] 2xs:left-[-20px] sm:text-[24px] sm:leading-[28px] md:left-[100px] md:px-[10px] lg:text-[32px] lg:leading-[36px]  lg:left-[150px]'
					>
						<i>
							Олександр <br /> Марченко
						</i>
					</p>

					<div className='relative mx-auto max-w-[480px] pb-[100px]'>
						<div className='absolute inset-0 bg-[#92a7b2] blur-3xl opacity-80 scale-[0.9] rounded-b-[50px] rounded-t-[10px]'></div>

						<Image
							src='/images/assets-16.png'
							alt='Олександр Марченко'
							width={400}
							height={400}
							className='relative mx-auto max-w-[400px] w-full h-auto'
						/>

						<div className='absolute bg-[#fff] w-full max-w-[492px] px-[24px] pt-[24px] 2xs:pb-[50px] md:pb-[75px] 2xs:bottom-[60px] md:bottom-[0] rounded-[16px] left-[50%] -translate-x-[50%]'>
							<p className='text-center '>
								Навчіться <b>магії та езотеричним практикам</b>, які допоможуть
								змінити ваше життя, <b>знайти гармонію</b> та{' '}
								<b>досягти бажаного</b>
							</p>

							<a
								className='primary_btn max-w-[calc(100%-32px)] sm:max-w-[440px] absolute left-[50%] -translate-x-[50%] -bottom-[40px] '
								href='#'
							>
								Дізнатися про курс
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

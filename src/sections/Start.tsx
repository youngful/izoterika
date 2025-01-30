import Image from 'next/image'

export default function Start() {
	return (
		<section
			className='min-h-[100vh] bg-cover bg-center mb-[146px]'
			style={{ backgroundImage: "url('/images/assets-01.png')" }}
		>
			<div className='container'>
				<div className='flex items-center pt-[35px] justify-center font-[Playfair] text-[#00246D] 2xs:mb-[24px] xs:mb-[42px]'>
					<div className='flex'>
						<span className='sm:text-[54px] mr-2'>13</span>
						<div>
							<p className='sm:text-[32px] sm:mb-2'>модулів</p>
							<p className='text-[#000] text-[10px] leading-[12px]'>
								в програмі курсу
							</p>
						</div>
					</div>

					<span className='w-[1px] mx-[32px] sm:mx-[66px] h-[48px] bg-[#3C93B5]'></span>

					<div className='flex'>
						<span className='sm:text-[54px] mr-2'>13</span>
						<div>
							<p className='sm:text-[32px] sm:mb-2'>тижнів</p>
							<p className='text-[#000] text-[10px] leading-[12px]'>
								удосконалення
							</p>
						</div>
					</div>
				</div>

				<h4 className='text-center text-[#000] 2xs:mb-[16px] xs:mb-[36px]'>
					Розкрий свою <b>внутрішню силу</b> в курсі
				</h4>

				<h1 className='uppercase text-center bg-gradient-to-r from-[#0f3a89] via-[#2795c2] to-[#0f3a89] text-transparent bg-clip-text'>
					Магія в
				</h1>

				<h1 className='uppercase text-center mb-[36px] gradient_text'>
					<i>реальності</i>
				</h1>

				<div className='relative'>
					<Image
						src={'/images/assets-08.png'}
						width={104}
						height={100}
						alt='icon'
						className='absolute 2xs:-top-[25%] sm:-top-[30%] md:-top-[40%] 2xs:-right-[0] md:right-[10%] lg:right-[20%]'
					/>

					<Image
						src={'/images/assets-09.png'}
						width={181}
						height={100}
						alt='icon'
						className='absolute -top-[50px] xs:left-[-20px] sm:left-[5%] lg:left-[15%]'
					/>

					<Image
						src={'/images/assets-10.png'}
						width={91}
						height={100}
						alt='icon'
						className='absolute top-[220px] xs:left-[10px] sm:left-[20%] lg:left-[25%]'
					/>

					<Image
						src={'/images/assets-11.png'}
						width={94}
						height={100}
						alt='icon'
						className='absolute top-[100px] 2xs:right-[0] xs:right-[15%] lg:right-[25%]'
					/>

					<Image
						src={'/images/assets-12.png'}
						width={110}
						height={100}
						alt='icon'
						className='absolute top-[330px] 2xs:right-[0] sm:right-[50px] lg:right-[25%] z-10'
					/>

					<Image
						src={'/images/assets-08.png'}
						width={120}
						height={100}
						alt='icon'
						className='none top-[400px] sm:absolute md:left-[70px] lg:left-[20%] z-10'
					/>

					<p className='absolute bg-gradient-to-r from-[transparent] via-[#fff] to-[transparent] lg:px-[40px] py-[10px] top-[30%] transform translate-y-[-50%] font-[Savoye] text-[#022771] sm:text-[32px] sm:leading-[36px] lg:text-[44px] lg:leading-[48px] z-10 md:px-[0px] lg:left-[100px]'>
						<i>
							Олександр <br /> Марченко
						</i>
					</p>

					<div className='relative mx-auto max-w-[480px] pb-[100px]'>
						<div className='absolute inset-0 bg-[#92a7b2] blur-3xl opacity-80 scale-[0.9] rounded-b-[50px] rounded-t-[10px]'></div>

						<Image
							src='/images/assets-16.png'
							alt='Олександр Марченко'
							width={480}
							height={512}
							className='relative max-w-[480px] w-full h-auto'
						/>

						<div className='absolute bg-[#fff] w-full max-w-[492px] px-[32px] pt-[32px] pb-[100px] bottom-0 rounded-[32px] left-[50%] -translate-x-[50%]'>
							<p className='text-center 2xs:text-[16px] 2xs:leading-[20px] xs:text-[20px] xs:leading-[24px]'>
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

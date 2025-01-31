import Image from 'next/image'

interface List {
	title: string
	Include: boolean
}

interface TariffItem {
	icon: string
	title: string
	list: List[]
	price: number
	discount: number
	link: string
}

interface TariffsProps {
	list: TariffItem[]
}

export default function Tariffs({ list }: TariffsProps) {
	return (
		<div className='flex 2xs:gap-[200px] 2xs:justify-center 2lg:justify-between  2lg:gap-[40px] flex-wrap'>
			{list.map((item, index) => (
				<div
					className={`${
						index % 2 === 0
							? 'bg-gradient-to-r from-[rgba(36,124,168,0.4)] to-[rgba(255,255,255,0)]'
							: 'bg-gradient-to-l from-[rgba(36,124,168,0.4)] to-[rgba(255,255,255,0)]'
					} max-w-[570px] w-full border-[1px] border-[#247CA8] relative p-[80px_40px_68px] rounded-[32px]`}
					key={index}
				>
					<div className='absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%] w-[80px] h-[100px] bg-[#247CA8] rounded-full blur-[20px] opacity-70' />
					<Image
						className='absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%]'
						src={item.icon}
						width={80}
						height={100}
						alt='icon'
					/>

					<h3 className='uppercase text-center gradient_text mb-[24px]'>{item.title}</h3>

					<ul className='2xs:mb-[24px] md:mb-[36px]'>
						{item.list.map((listItem, listIndex) => (
							<div key={listIndex} className={`flex gap-4 items-center 2xs:mb-2 md:mb-4 ${!listItem.Include && 'line-through text-[#3c93b5] opacity-50 '}`}>
								<span className={`${!listItem.Include && 'min-w-[8px] max-w[8px] h-[8px] ml-[2px]'} min-w-[12px] h-[12px] rounded-full bg-[#247CA8]`}></span>
								<li className='font-light max-w-[370px] w-full break-words'>{listItem.title}</li>
							</div>
						))}
					</ul>

					<div className='flex items-center font-semibold justify-center 2xs:gap-[24px] xs:gap-[50px]'>
						<p className='2xs:text-[32px] 2xs:leading-[40px] sm:text-[50px] sm:leading-[60px]'>{item.price}грн</p>
						<p className='line-through text-[#3c93b5] 2xs:text-[28px] 2xs:leading-[36px] sm:text-[38px] sm:leading-[48px]'>{item.discount}грн</p>
					</div>

					<a
						className='primary_btn max-w-[calc(100%-80px)] absolute left-[50%] translate-x-[-50%] translate-y-[-50%] 2xs:bottom-[-64px] md:-bottom-[88px]'
						href={item.link}
					>
						Отримати курс
					</a>
				</div>
			))}
		</div>
	)
}

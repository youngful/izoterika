import Image from 'next/image'

interface ModuleItem {
	number: number
	title: string
	list: string[]
}

interface ModulesProps {
	cards: ModuleItem[]
}

export default function Modules({ cards }: ModulesProps) {
	return (
		<div className='grid 2xs:mx-auto 2xs:grid-cols-[1fr] 2xs:max-w-[640px] lg:max-w-[none] lg:grid-cols-[1fr_1fr] gap-[28px]'>
			{cards.map((card, index) => (
				<div
					className='p-[32px] bg-gradient-to-t from-[#D2E4ED] to-[transparent] border-[1px] border-[#247CA8] rounded-[32px]'
					key={index}
				>
					<div className='flex justify-between items-center 2xs:mb-[32px] lg:mb-[70px]'>
						<div>
							<i>
								<h3 className='font-semibold'>
									<span className='text-[100px]'>{card.number}</span> модуль
								</h3>
							</i>
							<h3 className='text-[#247CA8]'>{card.title}</h3>
						</div>

						<Image
							src={'/images/assets-15.png'}
							width={42}
							height={42}
							alt='star'
						/>
					</div>

					<ul>
						{card.list.map((listItem, listIndex) => (
							<div key={listIndex} className='flex gap-4 items-center mb-2'>
								<span className='w-[12px] h-[12px] rounded-full bg-[#247CA8]'></span>
								<li className='font-light'>{listItem}</li>
							</div>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}

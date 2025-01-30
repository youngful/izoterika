import Image from 'next/image'
import { AudioPlayer } from './index'

interface ReviewItem {
	rating: number 
	name: string
	audio: string
}

interface ReviewsProps {
	reviews: ReviewItem[]
}

const StarRating = ({ rating }: { rating: number }) => {
	const stars = Array.from({ length: 5 }, (_, index) => index < rating)

	return (
		<div className='flex gap-1'>
			{stars.map((filled, index) => (
				<Image key={index} src={`/images/${filled ? 'star' : 'star_grey'}.svg`} width={20} height={20} className='sm:w-[32px] sm:h-[32px]' alt='star' />
			))}
		</div>
	)
}

export default function Reviews({ reviews }: ReviewsProps) {
	return (
		<div className='grid 2xs:mx-auto 2xs:max-w-[630px] lg:mx-0 lg:max-w-[none] lg:grid-cols-[1fr_1fr] 2xs:gap-[14px] lg:gap-[28px]'>
			{reviews.map((review, index) => (
				<div key={index} className='p-[30px_36px] bg-white rounded-[20px]'>
					<div className='flex flex-col items-end gap-2 mb-[28px]'>
						<StarRating rating={review.rating} />
						<p className='mr-4 sm:text-[30px] sm:leading-[36px]'>{review.name}</p>
					</div>
					<AudioPlayer src={review.audio} />
				</div>
			))}
		</div>
	)
}

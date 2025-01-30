'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'

export default function AudioPlayer({ src }: { src: string }) {
	const audioRef = useRef<HTMLAudioElement>(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [progress, setProgress] = useState(0)

	const togglePlay = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause()
			} else {
				audioRef.current.play()
			}
			setIsPlaying(!isPlaying)
		}
	}

	const handleTimeUpdate = () => {
		if (audioRef.current) {
			const progressValue =
				(audioRef.current.currentTime / audioRef.current.duration) * 100
			setProgress(progressValue)
		}
	}

	const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const progressBar = e.currentTarget
		const clickPosition = e.clientX - progressBar.getBoundingClientRect().left
		const progressWidth = progressBar.offsetWidth
		const newProgress = (clickPosition / progressWidth) * 100
		setProgress(newProgress)

		if (audioRef.current) {
			audioRef.current.currentTime =
				(newProgress / 100) * audioRef.current.duration
		}
	}

	return (
		<div className='relative flex items-center gap-4 w-full'>
			<button
				onClick={togglePlay}
				className='2xs:w-[32px] 2xs:h-[32px] sm:w-[70px] sm:h-[70px] flex items-center justify-center bg-black text-white rounded-full absolute 2xs:top-[-75px] sm:top-[-100px]'
			>
				<Image
					src={isPlaying ? '/images/pause.svg' : '/images/play.svg'}
					alt={isPlaying ? 'Pause' : 'Play'}
					width={24}
					height={24}
					className='w-1/2 h-1/2'
				/>
			</button>

			<div
				className='relative w-full h-[2px] bg-black rounded cursor-pointer'
				onClick={handleProgressClick}
			>
				<div className='absolute top-[-3px] left-[0px] w-[8px] h-[8px] rounded-full bg-black z-10'></div>

				<div
					className='absolute top-[50%] translate-y-[-50%] left-0 h-[1px] bg-white rounded transition-all'
					style={{ width: `${progress}%` }}
				></div>

				<div className='absolute top-[-3px] right-[0px] w-[8px] h-[8px] rounded-full bg-black z-10'></div>
			</div>

			<audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate} />
		</div>
	)
}

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const SecondVideo = () => {
	const videoRef = useRef<HTMLVideoElement>(null)

	useGSAP(() => {
		gsap.set('.lucia', {
			marginTop: '-60vh',
			opacity: 0,
		})

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.lucia',
				start: 'top top',
				end: 'bottom top',
				scrub: 2,
				pin: true,
			},
		})

		tl.to('.lucia', {
			opacity: 1,
			duration: 1,
			ease: 'power1.inOut',
		})

		if (videoRef.current) {
			videoRef.current.onloadedmetadata = () => {
				if (!videoRef.current) return

				tl.to(
					videoRef.current,
					{
						currentTime: videoRef.current.duration,
						duration: 3,
						ease: 'power1.inOut',
					},
					'<',
				)
			}
		}
	}, [])

	return (
		<section className='lucia'>
			<div className='h-dvh'>
				<video
					ref={videoRef}
					src='/videos/output2.mp4'
					className='size-full object-cover second-vd'
					muted
					playsInline
					preload='auto'
					style={{ objectPosition: '15% 0%' }}
				/>
			</div>
		</section>
	)
}

export default SecondVideo

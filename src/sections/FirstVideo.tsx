import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const FirstVideo = () => {
	const videoRef = useRef<HTMLVideoElement>(null)

	useGSAP(() => {
		gsap.set('.first-vd-wrapper', { marginTop: '-150vh', opacity: 0 })

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.first-vd-wrapper',
				start: 'top top',
				end: '+=200% top',
				scrub: 2,
				pin: true,
			},
		})

		tl.to('.hero-section', { delay: 0.5, opacity: 0, ease: 'power1.inOut' })
		tl.to('.first-vd-wrapper', {
			opacity: 1,
			duration: 2,
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
		<section className='first-vd-wrapper'>
			<div className='h-dvh'>
				<video
					ref={videoRef}
					src='./videos/output1.mp4'
					className='first-vd'
					muted
					playsInline
					preload='auto'
				/>
			</div>
		</section>
	)
}

export default FirstVideo

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const Final = () => {
	const videoRef = useRef<HTMLVideoElement>(null)

	useGSAP(() => {
		gsap.set('.final-content', { opacity: 0 })

		gsap.timeline({
			scrollTrigger: {
				trigger: '.final',
				start: 'top top',
				end: '90% top',
				scrub: 2,
				pin: true,
			},
		})

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.final',
				start: 'top 80%',
				end: '90% top',
				scrub: 2,
			},
		})

		tl.to('.final-content', {
			opacity: 1,
			duration: 1,
			scale: 1,
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
	})

	return (
		<section className='final'>
			<div className='final-content size-full'>
				<video
					ref={videoRef}
					src='./videos/output3.mp4'
					className='final-vd size-full object-cover'
					muted
					playsInline
					preload='auto'
				/>
			</div>
		</section>
	)
}

export default Final

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Outro = () => {
	useGSAP(() => {
		gsap.set('.final-message', { marginTop: '-100vh', opacity: 0 })

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.final-message',
				start: 'top 30%',
				end: 'top 10%',
				scrub: 2,
			},
		})

		tl.to('.final-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' }, 0)
		tl.to(
			'.final-message',
			{ opacity: 1, duration: 1, ease: 'power1.inOut' },
			0,
		)
	})
	return (
		<section className='final-message'>
			<div className='h-full col-center gap-10'>
				<img src='/images/logo.webp' alt='logo' className='md:w-72 w-52' />

				<div>
					<h3 className='gradient-title'>
						Coming <br /> November 19 <br /> 2026
					</h3>
				</div>

				<div className='flex-center gap-10'>
					<img src='/images/ps-logo.svg' alt='' className='md:w-32 w-20' />
					<img src='/images/x-logo.svg' alt='' className='md:w-52 w-40' />
				</div>
			</div>
		</section>
	)
}

export default Outro

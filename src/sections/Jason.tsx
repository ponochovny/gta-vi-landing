import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Jason = () => {
	useGSAP(() => {
		gsap.set('.jason', { marginTop: '-100vh' })

		gsap
			.timeline({
				scrollTrigger: {
					trigger: '.jason',
					start: 'top 20%',
					end: '10% center',
					scrub: 2,
				},
			})
			.to('.first-vd', {
				opacity: 0,
				duration: 1,
				ease: 'power1.inOut',
			})
			.to(
				'.jason .img-box',
				{
					scrollTrigger: {
						trigger: '.jason',
						start: 'top center',
						end: '80% center',
						scrub: 2,
					},
					y: -300,
					duration: 1,
					ease: 'power1.inOut',
				},
				'<',
			)
	})
	return (
		<section className='jason'>
			<div className='max-w-lg jason-content'>
				<h1>Jason Duval</h1>
				<h2>Jason wants an easy life, but things just keep getting harder.</h2>
				<p>
					Jason grew up around the world of crime, and he’s always been a bit of
					a troublemaker. He’s never been one to follow the rules, and he’s
					always looking for the next big score. But when he gets involved with
					the wrong people, things start to spiral out of control. Jason finds
					himself in over his head, and he has to figure out how to get out of
					the mess he’s in before it’s too late.
				</p>

				<div className='jason-2'>
					<img src='./images/jason-2.webp' alt='Jason Duval' />
				</div>
			</div>

			<div className='space-y-5 mt-96 img-box'>
				<div className='jason-1'>
					<img src='./images/jason-1.webp' alt='jason duval' />
				</div>
				<div className='jason-3'>
					<img src='./images/jason-3.webp' alt='jason duval' />
				</div>
			</div>
		</section>
	)
}

export default Jason

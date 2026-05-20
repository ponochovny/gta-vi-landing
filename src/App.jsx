import gsap from 'gsap'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'

import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import FirstVideo from './sections/FirstVideo'
import Jason from './sections/Jason'
import SecondVideo from './sections/SecondVideo'
import Lucia from './sections/Lucia'
import PostCard from './sections/PostCard'
import Final from './sections/Final'
import { useGSAP } from '@gsap/react'
import Outro from './sections/Outro'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const App = () => {
	useGSAP(() => {
		ScrollSmoother.create({
			wrapper: '#smooth-wrapper',
			content: '#smooth-content',
			smooth: 1,
			effects: true,
			normalizeScroll: true,
		})

		ScrollTrigger.refresh()
	})

	return (
		<main>
			<NavBar />
			<div id='smooth-wrapper'>
				<div id='smooth-content'>
					<Hero />
					<FirstVideo />
					<Jason />
					<SecondVideo />
					<Lucia />
					<PostCard />
					<Final />
					<Outro />
				</div>
			</div>
		</main>
	)
}

export default App

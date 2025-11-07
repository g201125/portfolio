import About from '@/components/about/about'
import { Hero } from '../components/hero/hero'
import Skills from '@/components/skils/skils'
import Services1 from '@/components/services1/services1'

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Skills />
			<Services1 />
		</main>
	)
}

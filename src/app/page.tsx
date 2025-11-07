import About from '@/components/about/about'
import { Hero } from '../components/hero/hero'
import Skills from '@/components/skils/skils'
import Services from '@/components/services/services'

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Skills />
			<Services />
		</main>
	)
}

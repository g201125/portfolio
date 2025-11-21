import About from '@/components/about/about'
import { Hero } from '../components/hero/hero'
import Skills from '@/components/skils/skils'
import Services from '@/components/services/services'
import Works from '@/components/MyWork/Myworks'
import Reviews from '@/components/reviews/reviews'
import Fitbacks from '@/components/fitbacks/fitbacks'
import Contaks from '@/components/contakts/contaks'

export default function Home() {
	return (
		<main>

			<Hero />
			<About />
			<Skills />
			<Services />
			<Works />
			<Reviews />
			<Fitbacks />
			<Contaks />
		</main>
	)
}

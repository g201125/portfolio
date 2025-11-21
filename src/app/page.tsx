import About from '@/components/about/about'
import { Hero } from '../components/hero/hero'
import Skills from '@/components/skils/skils'
import Services from '@/components/services/services'
import Works from '@/components/MyWork/Myworks'
import Reviews from '@/components/reviews/reviews'
import Fitbacks from '@/components/fitbacks/fitbacks'
import Stats from '@/components/stats/stats'


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
			<Stats />
		</main>
	)
}

import About from '@/components/about/about'
import { Hero } from '@/components/hero/hero'
import Skills from '@/components/skills/skills'
import Services from '@/components/services/services'
import Works from '@/components/works/works'
import Feedbacks from '@/components/feedbacks/feedbacks'
import Stats from '@/components/stats/stats'
import Contacts from '@/components/contacts/contacts'


export default function Home() {
	return (
		<main>

			<Hero />
			<About />
			<Skills />
			<Services />
			<Works />
			<Feedbacks />
			<Stats />
			<Contacts />
		</main>
	)
}

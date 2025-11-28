import Image from 'next/image'
import React from 'react'

const Skills = () => {
	const skills = [
		{ name: 'HTML', value: 90 },
		{ name: 'CSS', value: 80 },
		{ name: 'JS', value: 70 },
		{ name: 'React', value: 65 },
		{ name: 'Next.js', value: 60 },
	]

	return (
		<section id="skills" className='py-20 md:py-32 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl md:text-5xl font-bold mb-12 md:mb-20 text-gray-900'>Навыки</h2>

				<div className='flex flex-col md:flex-row items-center justify-between gap-12'>
					<div className="relative w-full max-w-[400px] aspect-[415/450]">
						<Image
							src='/men.png'
							alt='Skills illustration'
							fill
							className='object-contain'
						/>
					</div>

					<div className='w-full max-w-[670px] space-y-8'>
						{skills.map(skill => (
							<div className={`flex flex-col gap-2`} key={skill.name}>
								<div className="flex justify-between items-end">
									<span className={`font-bold text-xl text-gray-800`}>{skill.name}</span>
									<span className="text-sm font-medium text-gray-500">{skill.value}%</span>
								</div>
								<div className={`w-full h-3 bg-gray-200 rounded-full overflow-hidden`}>
									<div
										className={`h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out`}
										style={{ width: `${skill.value}%` }}></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills

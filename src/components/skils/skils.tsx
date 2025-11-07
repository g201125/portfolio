import Image from 'next/image'

const Skills = () => {
	const skills = [
		{ name: 'HTML', value: 90 },
		{ name: 'CSS', value: 80 },
		{ name: 'JS', value: 70 },
	]

	return (
		<section className='py-[140px] bg-[#F6F6F8] '>
			<div className='container mx-auto px-4'>
				<h2 className='text-[48px] mb-8 text-black'>Навыки</h2>

				<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
					<Image src='/men.png' alt='men' width={415} height={450} className='object-contain' />

					<div className='w-full max-w-[670px] space-y-10 md:space-y-[85px]'>
						{skills.map(skill => (
							<div className={`flex items-center`} key={skill.name}>
								<span className={`min-w-[64px] font-semibold`}>{skill.name}</span>
								<div className={`w-full h-[32px] bg-[#DBDBED] relative`}>
									<span
										className={`absolute left-0 h-full bg-[#2352DE] w-full`}
										style={{ maxWidth: `${skill.value}%` }}></span>
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

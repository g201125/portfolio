
import Image from "next/image";

const Skills = () => {
    const skills = [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
    ];

    return (
        <section className="py-[140px] bg-[#F6F6F8] text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-[48px] mb-8 text-black">
                    Навыки
                </h2>

                <div className="flex flex-col md:flex-row items-center `justify-between gap-10">

                    <Image
                        src="/men.png"
                        alt="men"
                        width={415}
                        height={450}
                        className="object-contain"
                    />


                    <div className="w-full max-w-md space-y-8">
                        {skills.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="text-lg font-medium text-[#333333]">
                                        {skill.name}
                                    </span>
                                    <span className="text-gray-400"></span>
                                </div>
                                <div className="w-full h-4">
                                    <div
                                        className="bg-blue-600 h-4 transition-all duration-1000 ease-out"

                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
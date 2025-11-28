import Image from "next/image"
import Link from "next/link"

export const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center text-white overflow-hidden"
            style={{ backgroundImage: `url(/bg.png)` }}
        >
            <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text readability */}

            <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
                <div className="max-w-4xl">
                    <h1 className="font-bold leading-tight mb-8">
                        <span className="block text-2xl sm:text-3xl md:text-4xl mb-4 text-blue-400 font-medium tracking-wide uppercase">
                            Привет, я Рустам
                        </span>
                        <span className="text-5xl sm:text-7xl md:text-[90px] block mb-2">
                            Frontend-
                        </span>
                        <span className="text-5xl sm:text-7xl md:text-[90px] block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            разработчик
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed hidden md:block">
                        Создаю современные, быстрые и адаптивные веб-сайты.
                        Превращаю ваши идеи в реальность с помощью кода.
                    </p>

                    <Link
                        href="#portfolio"
                        className="
                            inline-flex flex-col items-center justify-center
                            group
                            text-white hover:text-blue-400 transition-colors duration-300
                        "
                    >
                        <span className="text-lg font-medium mb-2 uppercase tracking-widest">Смотреть работы</span>
                        <div className="relative w-8 h-12 border-2 border-current rounded-full flex justify-center p-1">
                            <div className="w-1 h-3 bg-current rounded-full animate-bounce mt-1" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

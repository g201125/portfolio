import Image from "next/image"
import Link from "next/link"

export const Hero = () => {
    return (
        <section
            className="bg-no-repeat text-white bg-cover bg-center"
            style={{ backgroundImage: `url(/bg.png)` }}
        >
            <div className="container h-[90vh] md:h-screen flex items-center relative px-4">

                {/* Заголовок */}
                <h1 className="font-bold mt-10 leading-tight
                               text-4xl sm:text-5xl md:text-[90px]">
                    <span className="block text-2xl sm:text-3xl md:text-[48px] mb-2">
                        Привет, я Иван Иванов
                    </span>
                    frontend- <br />
                    разработчик
                </h1>

                {/* Кнопка "смотреть работы" */}
                <Link
                    className="
                        flex flex-col items-center justify-center
                        hover:text-blue-500 duration-300 
                        absolute -translate-x-1/2 left-1/2 
                        bottom-6 md:bottom-[30px]
                        text-sm sm:text-base
                    "
                    href="#portfolio"
                >
                    смотреть работы
                    <Image
                        src="/arrow.svg"
                        alt="стрелка"
                        width={30}
                        height={20}
                        className="mt-1 md:w-[37px] md:h-[23px]"
                    />
                </Link>

            </div>
        </section>
    )
}

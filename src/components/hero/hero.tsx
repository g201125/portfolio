import Image from "next/image"
import Link from "next/link"

export const Hero = () => {
    return (
        <section className={"bg-no-repeat text-white bg-cover bg-center"} style={{
            backgroundImage: `url(/bg.png)`
        }}>
            <div className="container h-screen flex items-center relative">
                <h1 className={`text-[90px] font-bold mt-25`}>
                    <span className="text-[48px] block">Привет, я Иван Иванов</span>
                    frontend- <br />
                    разработчик
                </h1>

                <Link className="flex items-center hover:text-blue-500 duration-300 justify-center flex-col absolute -translate-x-1/2 left-1/2 bottom-[30px]" href={'#'}>
                    смотреть работы
                    <Image className=" " src={'/arrow.svg'} alt="стрелка" width={37} height={23} />
                </Link>
            </div>
        </section>
    )
}

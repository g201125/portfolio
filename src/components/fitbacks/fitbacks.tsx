import Image from "next/image"

const Fitbacks = () => {
    return (
        <section className="py-20">
            <div className="container">
                <h2 className="title mb-15 font-bold text-center">
                    Отзывы клиентов
                </h2>

             
                <div className="flex flex-col md:flex-row items-center gap-10">

                   
                    <div className="flex flex-col max-w-[400px] items-center gap-5 text-center">
                        <Image
                            src="/mc.png"
                            width={130}
                            height={130}
                            alt=""
                            className="rounded-full"
                        />
                        <h3 className="imya text-xl md:text-2xl font-semibold">
                            Марк Цукерберг
                        </h3>
                        <p className="text italic text-xl md:text-2xl">
                            Фантастика! Я всецело доволен работой этого специалиста.
                            Быстро и качественно. Рекомендую!
                        </p>
                    </div>

                
                    <video
                        src="/vd.png"
                        poster="/vd.png"
                        className="w-full max-w-[570px] rounded-lg"
                        controls
                    />
                </div>
            </div>
        </section>
    );
}

export default Fitbacks
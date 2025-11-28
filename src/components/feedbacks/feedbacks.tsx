import Image from "next/image"

const Feedbacks = () => {
    return (
        <section id="reviews" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-20 text-center text-gray-900">
                    Отзывы клиентов
                </h2>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

                    <div className="flex flex-col max-w-[500px] items-center text-center">
                        <div className="relative w-32 h-32 mb-6">
                            <Image
                                src="/mc.png"
                                fill
                                alt="Client photo"
                                className="rounded-full object-cover border-4 border-gray-100 shadow-lg"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">
                            Марк Цукерберг
                        </h3>
                        <p className="text-xl text-gray-600 italic leading-relaxed">
                            "Фантастика! Я всецело доволен работой этого специалиста.
                            Быстро и качественно. Рекомендую!"
                        </p>
                    </div>

                    <div className="w-full max-w-[600px] aspect-video relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 group cursor-pointer">
                        {/* Placeholder for video - using image for now as no video file exists */}
                        <Image
                            src="/vd.png"
                            fill
                            alt="Video review"
                            className="object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feedbacks
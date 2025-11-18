import Image from "next/image"

const Fitbacks = () => {
    return (
        <section className="py-20">
            <div className="container">
                <h2 className="title mb-15 font-bold text-center" >Отзывы клиентов</h2>
                <div className="flex items-center gap-10">
                    <div className="flex flex-col max-w-[400px] items-center gap-5">
                        <Image
                            src="/mc.png"
                            width={130}
                            height={130}
                            alt=""
                        />
                        <h3 className="imya">Марк Цукерберг</h3>
                        <p className="text text-center italic text-2xl ">
                            Фантастика! Я всецело доволен работой этого специалиста. Быстро и
                            качественно. Рекомендую!
                        </p>
                    </div>
                    <video
                        src="/vd.png"
                        poster="/vd.png"
                        width={570}
                        height={400}
                    />
                </div>
            </div>
        </section>
    );
}



export default Fitbacks
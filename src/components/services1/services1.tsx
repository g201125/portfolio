import Image from "next/image"

const Services1 = () => {
  return (
    <section className="py-[140px] bg-[#F6F6F8] text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-[48px] mb-8 text-black">
                    Услуги
                </h2>

                <Image
                 src="/palka.svg"
                 alt="palka"
                 width={60}
                 height={60}
                 className=""
                                    />
                </div>
                </section>
  )
}

export default Services1

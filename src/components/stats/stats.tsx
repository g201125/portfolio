import Image from "next/image";

export default function PageStats() {
    const stats = [
        { label: "Выполненных работ", value: 56, img: "/review.png" },
        { label: "Довольных клиентов", value: 23, img: "/clients.png" },
        { label: "Выпито чашек кофе", value: 477, img: "/coffee.png" },
        { label: "Всего отзывов", value: 48, img: "/review.png" },
    ];

    return (
        <section className="my-10 px-4">
            <div
                className="
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    lg:grid-cols-4 
                    gap-6 
                    max-w-6xl 
                    mx-auto
                "
            >
                {stats.map(({ label, value, img }, index) => (
                    <div
                        key={index}
                        className="
                            bg-[#f8f9fd] 
                            p-6 
                            rounded 
                            shadow 
                            flex flex-col 
                            items-center 
                            text-center
                        "
                    >
                        <Image src={img} alt={label} width={60} height={60} />

                        <div className="text-sm text-[#333] mt-3">{label}</div>

                        <div className="text-2xl font-bold mt-1">{value}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
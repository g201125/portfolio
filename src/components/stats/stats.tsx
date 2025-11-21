import Image from "next/image";

export default function PageStats() {
    const stats = [
        { label: "Выполненных работ", value: 56, img: "/review.png" },
        { label: "Довольных клиентов", value: 23, img: "/clients.png" },
        { label: "Выпито чашек кофе", value: 477, img: "/coffee.png" },
        { label: "Всего отзывов", value: 48, img: "/review.png" },
    ];

    return (
        <section style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "40px 0" }}>
            {stats.map(({ label, value, img }, index) => (
                <div
                    key={index}
                    style={{
                        background: "#f8f9fd",
                        padding: "20px",
                        width: "279px",
                        textAlign: "center",
                        borderRadius: "4px",
                        boxShadow: "0 0 10px rgba(0,0,0,0.05)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Image src={img} alt={label} width={60} height={60} />
                    {/* Текст */}
                    <div style={{ fontSize: "14px", color: "#333", marginBottom: "10px" }}>{label}</div>
                    {/* Значение */}
                    <div style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</div>
                </div>
            ))}
        </section>
    );
}

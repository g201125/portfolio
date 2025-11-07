import Image from "next/image"


interface IServicesCard {
    image: string
    title: string
    text: string
}

const ServicesCard = ({ image, text, title }: IServicesCard) => {
    return (
        <div className="max-w-[330px]">
            <Image src={image} width={60} height={60} alt="Image" />
            <h3 className="mt-[30px] mb-[25px] font-semibold text-[28px] leading-[1.3]">{title}</h3>
            <p className="text-lg">{text}</p>
        </div>
    )
}

export default ServicesCard
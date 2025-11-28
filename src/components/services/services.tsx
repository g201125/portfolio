import Image from "next/image"
import ServicesCard from "../ui/services-card"

const cards = [
  {
    id: 1,
    image: '/palka.svg',
    title: 'Верстка проектов',
    text: 'Сделаю качественную вёрстку вашего проекта по предоставленному макету или примеру'
  },
  {
    id: 2,
    image: '/sent.png',
    title: 'Посадка на CMS',
    text: 'Интегрирую ваш проект в одну из популярных CMS'
  },
  {
    id: 3,
    image: '/chat.png',
    title: 'Поддержка сайта',
    text: 'Гарантирую поддержку вашего сайта на протяжении 30 дней после сдачи проекта'
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-20 text-gray-900">
          Вёрстка проектов
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {cards.map(({ id, image, title, text }) =>
            <ServicesCard image={image} text={text} title={title} key={id} />
          )}
        </div>

      </div>
    </section>
  )
}

export default Services

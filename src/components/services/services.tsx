import Image from "next/image"
import Title from "../ui/title"
import ServicesCard from "../ui/services-card"

const cards = [
  {
    id: 1,
    image: '/palka.svg',
    title: 'Верстка проектов',
    text: 'Сделаю качественную вёрстку вашего  проекта по предоставленному макету или примеру'
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
    text: 'Гарантирую поддержку вашего сайта на протяжениии 30 дней после сдача проекта'
  }
]

const Services = () => {
  return (
    <section className="py-[140px]">
      <div className="container mx-auto px-4">
        <Title title="Вёрстка проектов" />


        <div className="flex justify-center gap-[90px]">
          {cards.map(({ id, image, title, text }) =>
            <ServicesCard image={image} text={text} title={title} key={id} />
          )}
        </div>

      </div>
    </section>
  )
}

export default Services

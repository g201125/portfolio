"use client";

export default function ContactsPage() {
  return (
    <main className="contacts-page py-10 md:py-20">
      <div className="contacts-container container mx-auto px-4">

        {/* Основной контейнер: колонка на мобиле / ряд на ПК */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">

          {/* Левая часть */}
          <section className="contacts-left w-full md:w-1/2">
            <h1 className="contacts-title text-3xl md:text-4xl font-bold mb-6">
              Контакты
            </h1>

            <p className="contacts-text text-lg mb-6">
              Связаться со мной можно, воспользовавшись контактной формой
              или напрямую по номеру телефона, email, в соцсетях:
            </p>

            <a
              href="tel:+380501111111"
              className="contacts-phone block text-xl font-semibold mb-3"
            >
              +38 (050) 111 11 11
            </a>

            <a
              href="mailto:frontend-monster@email.com"
              className="contacts-email block text-lg mb-6"
            >
              frontend-monster@email.com
            </a>

            <div className="contacts-socials flex gap-4 mt-4">
              <a href="#" aria-label="Instagram" className="social-icon w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded">
                <span>in</span>
              </a>
              <a href="#" aria-label="VK" className="social-icon w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded">
                <span>vk</span>
              </a>
              <a href="#" aria-label="Telegram" className="social-icon w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded">
                <span>tg</span>
              </a>
            </div>
          </section>

          {/* Правая часть (форма) */}
          <section className="contacts-right w-full md:w-1/2">

            {/* Поля в 2 колонки на ПК — в 1 на телефонах */}
            <div className="contacts-row grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="field">
                <label className="field-label block mb-2" htmlFor="name">
                  Ваше имя
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Иван"
                  className="field-input w-full p-3 rounded bg-gray-100"
                />
              </div>

              <div className="field">
                <label className="field-label block mb-2" htmlFor="phone">
                  Номер телефона
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+380501111111"
                  className="field-input w-full p-3 rounded bg-gray-100"
                />
              </div>
            </div>

            {/* Сообщение */}
            <div className="field field-full mt-6">
              <label className="field-label block mb-2" htmlFor="message">
                Ваше сообщение
              </label>
              <textarea
                id="message"
                placeholder="Текст вашего сообщения"
                className="field-textarea w-full p-3 h-40 rounded bg-gray-100"
              />
            </div>

            <button
              className="submit-btn mt-6 w-full md:w-auto bg-black text-white px-8 py-3 rounded"
              type="submit"
            >
              Отправить
            </button>
          </section>

        </div>
      </div>
    </main>
  );
}
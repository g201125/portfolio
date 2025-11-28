"use client";

import React from 'react';

export default function Contacts() {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">

          {/* Left Side: Info */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">
              Контакты
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Связаться со мной можно, воспользовавшись контактной формой
              или напрямую по номеру телефона, email, или в соцсетях:
            </p>

            <div className="space-y-6">
              <a
                href="tel:+380501111111"
                className="block text-2xl font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                +38 (050) 111 11 11
              </a>

              <a
                href="mailto:rustam@example.com"
                className="block text-xl text-gray-800 hover:text-blue-600 transition-colors"
              >
                rustam@example.com
              </a>
            </div>

            <div className="flex gap-4 mt-10">
              {['Instagram', 'VK', 'Telegram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-12 h-12 bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white flex items-center justify-center rounded-full transition-all duration-300 text-sm font-bold uppercase tracking-wider"
                >
                  {social.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-1/2 bg-gray-50 p-8 rounded-2xl">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-600" htmlFor="name">
                    Ваше имя
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Иван"
                    className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-600" htmlFor="phone">
                    Номер телефона
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+380..."
                    className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600" htmlFor="message">
                  Ваше сообщение
                </label>
                <textarea
                  id="message"
                  placeholder="Расскажите о вашем проекте..."
                  className="w-full p-4 h-40 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                />
              </div>

              <button
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                type="submit"
              >
                Отправить сообщение
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
// app/page.tsx
"use client";

export default function ContactsPage() {
    return (
        <main className="contacts-page">
            <div className="contacts-container">
                {/* Левая часть */}
                <section className="contacts-left">
                    <h1 className="contacts-title">Контакты</h1>

                    <p className="contacts-text">
                        Связаться со мной можно, воспользовавшись контактной формой
                        или напрямую по номеру телефона, email, в соцсетях:
                    </p>

                    <a href="tel:+380501111111" className="contacts-phone">
                        +38 (050) 111 11 11
                    </a>

                    <a
                        href="mailto:frontend-monster@email.com"
                        className="contacts-email"
                    >
                        frontend-monster@email.com
                    </a>

                    <div className="contacts-socials">
                        <a href="#" aria-label="Instagram" className="social-icon">
                            <span>in</span>
                        </a>
                        <a href="#" aria-label="VK" className="social-icon">
                            <span>vk</span>
                        </a>
                        <a href="#" aria-label="Telegram" className="social-icon">
                            <span>tg</span>
                        </a>
                    </div>
                </section>

                {/* Правая часть (форма) */}
                <section className="contacts-right">
                    <div className="contacts-row">
                        <div className="field">
                            <label className="field-label" htmlFor="name">
                                Ваше имя
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Иван"
                                className="field-input"
                            />
                        </div>

                        <div className="field">
                            <label className="field-label" htmlFor="phone">
                                Номер телефона
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="+380501111111"
                                className="field-input"
                            />
                        </div>
                    </div>

                    <div className="field field-full">
                        <label className="field-label" htmlFor="message">
                            Ваше сообщение
                        </label>
                        <textarea
                            id="message"
                            placeholder="Текст вашего сообщения"
                            className="field-textarea"
                        />
                    </div>

                    <button className="submit-btn" type="submit">
                        Отправить
                    </button>
                </section>
            </div>

            {/* Стили под этот блок */}
            <style jsx>{`
          .contacts-page {
            min-height: 100vh;
            background: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              sans-serif;
            color: #1a1a1a;
            padding: 60px 40px;
          }
  
          .contacts-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }
  
          .contacts-left {
            max-width: 360px;
          }
  
          .contacts-title {
            font-size: 32px;
            font-weight: 700;
            margin: 0 0 24px;
          }
  
          .contacts-text {
            font-size: 14px;
            line-height: 1.6;
            margin: 0 0 18px;
            color: #555;
          }
  
          .contacts-phone {
            display: block;
            margin-bottom: 6px;
            font-size: 14px;
            text-decoration: none;
            color: #1e4acc;
          }
  
          .contacts-email {
            display: block;
            margin-bottom: 18px;
            font-size: 14px;
            text-decoration: none;
            color: #1e4acc;
          }
  
          .contacts-socials {
            display: flex;
            gap: 12px;
          }
  
          .social-icon {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            border: 2px solid #1e4acc;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            color: #1e4acc;
          }
  
          .contacts-right {
            flex: 1;
            max-width: 560px;
          }
  
          .contacts-row {
            display: flex;
            gap: 24px;
            margin-bottom: 16px;
          }
  
          .field {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }
  
          .field-full {
            margin-bottom: 18px;
          }
  
          .field-label {
            font-size: 12px;
            color: #666;
          }
  
          .field-input {
            height: 32px;
            border-radius: 0;
            border: 1px solid #e6e6e6;
            padding: 6px 10px;
            font-size: 13px;
            background: #fafafc;
          }
  
          .field-input::placeholder {
            color: #c0c0c0;
          }
  
          .field-textarea {
            min-height: 140px;
            border-radius: 0;
            border: 1px solid #e6e6e6;
            padding: 10px;
            font-size: 13px;
            background: #fafafc;
            resize: none;
          }
  
          .field-textarea::placeholder {
            color: #c0c0c0;
          }
  
          .submit-btn {
            margin-top: 8px;
            padding: 10px 28px;
            border: none;
            outline: none;
            background: #1e4acc;
            color: #ffffff;
            font-size: 14px;
            cursor: pointer;
          }
  
          /* Адаптив под узкий экран */
          @media (max-width: 900px) {
            .contacts-container {
              flex-direction: column;
              gap: 32px;
            }
  
            .contacts-right {
              max-width: 100%;
            }
  
            .contacts-page {
              padding: 40px 20px;
            }
          }
        `}</style>
        </main>
    );
}

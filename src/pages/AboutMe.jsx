import React from 'react';

const AboutMe = () => {
  return (
    <div className="page fade-in">
      <h1>Про мене</h1>
      
      <section className="about-section">
        <h2>Хто я?</h2>
        <p>Привіт!Мене звати Артур - я початківець в ІТ сфері. Моя мета — стати професіоналом та створювати щось таке, чим люди будуть захоплюватися, але дупля не відстрелювати як воно працює.</p>
      </section>

      <section className="about-section">
        <h2>Цінності та захоплення</h2>
        <ul>
          <li><strong>Навчання:</strong> Постійно вивчаю щось нове та цікаве.Працюю над покращенням себе як особистості</li>
          <li><strong>Хобі:</strong> Кодинг, відеоігри, читання книг та футбол.</li>
          <li><strong>Досвід:</strong> Курси: "Python: Структури даних", "Python для веб", "Python для баз даних", "Програмування для всіх: основи Python", "Від початківця до експерта в ШІ", "ІТ-продукт з нуля: з чого розпочати та як розвивати?".</li>
        </ul>
      </section>

      <section className="projects-section">
        <h2>Мої проєкти</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>сайт орг. NGA</h3>
            <a href="https://ngaua.pages.dev/" target="_blank" rel="noreferrer">Лендінг сторінка</a>
          </div>
          <div className="project-card">
            <h3>CCO</h3>
            <a href="t.me/naukovyinubip" target="_blank" rel="noreferrer">Telegram канал</a>
          </div>
          <div className="project-card">
            <h3>React</h3>
            <a href="https://github.com/" target="_blank" rel="noreferrer">Портфоліо (Поточний)</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
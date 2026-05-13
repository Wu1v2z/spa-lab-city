import React from 'react';

const MyFuture = () => {
  return (
    <div className="page fade-in">
      <h1>Мій розвиток</h1>

      <section className="future-steps">
        <h2>3 кроки в майбутнє</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Крок 1: Опанування бази</h3>
            <p>Вивчення мови програмування та основ роботи в ІТ.</p>
          </div>
          <div className="timeline-item">
            <h3>Крок 2: Перша робота</h3>
            <p>Отримання позиції Junior посади у ІТ компанії.</p>
          </div>
          <div className="timeline-item">
            <h3>Крок 3: Захоплення всього світу.</h3>
            <p>Туда-сюда - і я мільйонер.</p>
          </div>
        </div>
      </section>

      <section className="motivation">
        <h2>Мотивація</h2>
        <blockquote>
          "Yesterday you said tomorrow." - Nike
        </blockquote>
      </section>

      <section className="dream-job">
        <h2>Робота мрії</h2>
        <p>
          Я бачу себе керівником великої ІТ компанії, яка створює інноваційні продукти, що змінюють життя людей на краще. 
          Моя мета — не просто писати код, а створювати рішення, які будуть корисними та цікавими для мільйонів користувачів по всьому світу.
          Також я мрію про те, щоб створити gamedev студію, яка розроблятиме захоплюючі та інноваційні відеоігри, що поєднують в собі глибокий сюжет та унікальний ігровий процес.
        </p>
      </section>
    </div>
  );
};

export default MyFuture;
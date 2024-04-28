import React, { useRef, useState } from 'react';
import { Image } from "react-bootstrap";

const trendData = {
    IT: [
        { id: 1, title: 'Искусство программирования', content: 'В новом материале рассмотрим изысканное искусство программирования, выделяя тонкости и трудности в создании эффективного кода.', img: "https://i.imgur.com/T1EIvVq.png" },
        { id: 2, title: 'Будущее технологий', content: 'Спрогнозируем технологическое будущее, обсудим ключевые тренды и инновации, которые изменят наш мир.', img: "https://i.imgur.com/MeiJIpD.png" },
        { id: 3, title: 'Этические вопросы в IT', content: 'Обсудим этические аспекты использования информационных технологий, стоящие перед современными разработчиками и инженерами.', img: "https://i.imgur.com/fTdfrlg.png" },
    ],
    Sport: [
        { id: 1, title: 'Спорт: За кулисами чемпионатов', content: 'Приглашаем вас в увлекательный мир спорта, где мы расскажем о необычных тренировках, стратегиях команд и личных историях успеха.', img: "https://i.imgur.com/rq5dwjj.png" },
        { id: 2, title: 'Экстремальные виды спорта', content: 'Отправимся в мир экстримальных видов спорта, расскажем о смелых трюках, приключениях и страстях людей, выбравших экстрим в жизни.', img: "https://i.imgur.com/wEZpNV2.png" },
    ],
    Politics: [
        { id: 1, title: 'Глобальная политика: Тенденции и анализ', content: 'Анализируем последние события в мировой политике, раскрываем тенденции и обсуждаем влияние глобальных событий на жизнь обычных людей.', img: "https://i.imgur.com/psouAbA.png" },
        { id: 2, title: 'Интервью с политическими лидерами', content: 'Беседы с влиятельными политиками мира: разговоры о стратегиях, приоритетах и вызовах, стоящих перед современными лидерами.', img: "https://i.imgur.com/bx2hVzD.png" },
    ],
    Music: [
        { id: 1, title: 'Музыкальные новинки: Открой для себя', content: 'Представляем самые свежие музыкальные треки, артистов и жанры. Погружение в мир звуков и мелодий.', img: "https://i.imgur.com/5B3H1pR.png" },
        { id: 2, title: 'Творческий процесс артистов', content: 'Разговоры с музыкальными творцами о том, как они находят вдохновение, создают музыку и формируют свой уникальный стиль.', img: "https://i.imgur.com/FzS7g3w.png" },
    ],
    Other: [
        { id: 1, title: 'Путешествия и приключения', content: 'Рассказываем о необычных местах, культурах и приключениях. Путеводитель по удивительному миру, который стоит открыть для себя.', img: "https://i.imgur.com/wV7nBwq.png" },
        { id: 2, title: 'Наука и открытия', content: 'Лучшие новости из мира науки: открытия, исследования и последние технологические достижения.', img: "https://i.imgur.com/nyHc8iy.png" },
    ]
};

export default function BlogToggler() {
    const [activeTrend, setActiveTrend] = useState(null);
    const trendRefs = useRef(
        Object.keys(trendData).reduce((acc, trend) => {
            acc[trend] = Array(trendData[trend].length)
                .fill(0)
                .map(() => React.createRef());
            return acc;
        }, {})
    );

    function handleScrollToPost(trend, index) {
        trendRefs.current[trend][index].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    function handleTrendClick(trend) {
        setActiveTrend(trend);
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12 text-center">
                    {Object.keys(trendData).map((trend) => (
                        <button
                            key={trend}
                            className={`btn btn-primary mr-2 mb-2 mx-2 ${activeTrend === trend ? 'active' : ''}`}
                            onClick={() => {
                                handleScrollToPost(trend, 0);
                                handleTrendClick(trend);
                            }}
                        >
                            {trend}
                        </button>
                    ))}
                </div>
            </div>
            <div className="row">
                {Object.keys(trendData).map((trend) => (
                    <div key={trend} className={`col-md-4 ${activeTrend !== trend ? 'd-none' : ''}`}>
                        <div className="mb-3">
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    <h1> {trend} </h1>
                                    {trendData[trend].map((post, index) => (
                                        <li key={post.id} ref={trendRefs.current[trend][index]} className="mb-3 card p-3">
                                            <h2 className="h4">{post.title}</h2>
                                            <Image
                                                src={post.img}
                                                alt={post.id}
                                                className="mb-3"
                                                width={320}
                                                height={200}
                                            />
                                            <p>{post.content}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

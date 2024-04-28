import { useState } from 'react';

export default function Form() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');
    const [counter, setCounter] = useState(0);

    const questions = [
        {
            id: 1,
            question: "Что такое React?",
            correctAnswer: "library",
        },
        {
            id: 2,
            question: "Как называется основной строительный блок React-приложения?",
            correctAnswer: "component",
        },
        {
            id: 3,
            question: "Какой хук используется для добавления состояния в функциональный компонент в React?",
            correctAnswer: "useState",
        },
        {
            id: 4,
            question: "Через что передаются данные между компонентами в React?",
            correctAnswer: "props",
        },
        {
            id: 5,
            question: "Понравился квиз?",
            correctAnswer: "да",
        },
    ];

    const currentQuestion = questions[counter];

    if (status === 'success' || counter === questions.length) {
        return (
            <div className="container mt-4 text-center">
                {status === 'success' ? (
                    <h1>Спасибо!</h1>
                ) : (
                    <h1>Квиз завершен!</h1>
                )}
            </div>
        );
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer, currentQuestion.correctAnswer);
            setCounter(counter + 1);
            setStatus('typing');
            setAnswer('');
            setError(null);
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center">Квиз (ответы на английском)</h2>
            <p className="text-center">{currentQuestion.question}</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group align-items-center justify-content-center d-flex">
                    <input
                        value={answer}
                        onChange={handleTextareaChange}
                        disabled={status === 'submitting'}
                        className="form-text"
                    />
                </div>
                <div className="form-group text-center p-2">
                    <button
                        type="submit"
                        disabled={answer.length === 0 || status === 'submitting'}
                        className="btn btn-primary"
                    >
                        Отправить
                    </button>
                </div>
                {error !== null && (
                    <p className="text-danger text-center">{error.message}</p>
                )}
                {status === 'submitting' && (
                    <p className="text-center">Проверяем...</p>
                )}
            </form>
        </div>
    );
}

function submitForm(answer, correctAnswer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== correctAnswer.toLowerCase();
            if (shouldError) {
                reject(new Error('Хорошая попытка, но ответ неправильный. Попробуй заново!'));
            } else {
                resolve();
            }
        }, 500);
    });
}

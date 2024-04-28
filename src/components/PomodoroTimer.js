import React, { useState, useRef } from 'react';

export default function PomodoroTimer() {
    const initialTime = 1500; // Initial time in seconds (25 minutes)
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);

    const intervalRef = useRef(null);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    const handleStartStop = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
        } else {
            const startTime = Date.now();
            intervalRef.current = setInterval(() => {
                const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
                if (time - elapsedTime <= 0) {
                    clearInterval(intervalRef.current);
                    setTime(0);
                    setIsRunning(false);
                    alert("Время вышло!");
                } else {
                    setTime(time - elapsedTime);
                }
            }, 1000);
        }
        setIsRunning(!isRunning);
    };

    const handleAddTime = () => {
        setTime((prevTime) => prevTime + 300); // Add 5 minutes (300 seconds)
    };

    const handleSubtractTime = () => {
        setTime((prevTime) => Math.max(0, prevTime - 300)); // Subtract 5 minutes (300 seconds), but ensure it doesn't go below 0
    };

    const handleStartOver = () => {
        clearInterval(intervalRef.current);
        setTime(initialTime);
        setIsRunning(false);
    };

    return (


            <div className="container p-3" >
                <h1 className=" d-flex justify-content-center align-items-center mx-2"> Помидорка таймер </h1>
                <div className="d-flex justify-content-center align-items-center">

                    <h1 className={"mx-2"} >Осталось времени: {formatTime(time)}</h1>

                </div>

                <div className="d-flex mt-3 justify-content-center">
                    <button type="button" className={"btn btn-danger mx-2"} onClick={handleSubtractTime}>-5 минут</button>
                    <button type="button" className={"btn btn-success mx-2"} onClick={handleAddTime}>+5 минут</button>
                    <button type="button" className={"btn btn-primary mx-2"} onClick={handleStartStop}>{isRunning ? 'Стоп' : 'Старт'}</button>
                    <button type="button" className={"btn btn-secondary mx-2"} onClick={handleStartOver}>Начать заново</button>
                </div>
            </div>

    );
}

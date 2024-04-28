import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const disciplinesData = {
    'Как найти стажировку': 'Bruh.',
    'Как сдать экзамены': 'Bruh x2',
};

function DisciplinesPage() {
    const [selectedDiscipline, setSelectedDiscipline] = useState('Глубокое обучение');

    const handleDisciplineClick = (discipline) => {
        setSelectedDiscipline(discipline);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </nav>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 offset-md-3">
                        <h1 className="text-center mb-4">Выберите статейку</h1>
                        <ul className="list-group">
                            {Object.keys(disciplinesData).map((discipline) => (
                                <li
                                    key={discipline}
                                    className={`list-group-item ${selectedDiscipline === discipline ? 'active' : ''}`}
                                    onClick={() => handleDisciplineClick(discipline)}
                                >
                                    {discipline}
                                </li>
                            ))}
                        </ul>
                        {selectedDiscipline && (
                            <div className="mt-4">
                                <h2 className="text-center">{selectedDiscipline}</h2>
                                <p>{disciplinesData[selectedDiscipline]}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DisciplinesPage;

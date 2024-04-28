import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg px-4 ">
            <a className="navbar-brand">Finwave</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/*<Link className="nav-item nav-link" to="/">Таблица студентов</Link>*/}
                    <Link className="nav-item nav-link" to="/info">Информация</Link>
                    <Link className="nav-item nav-link" to="/blog">Блог</Link>
                    <Link className="nav-item nav-link" to="/quiz">Квиз</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import InfoPage from './components/InfoPage';
import Blog from "./components/Blog";
import Quiz from "./components/Quiz";

const App = () => {
    return (
        <Router>
            <div>
                <Header />

                <Routes>
                    {/*<Route*/}
                    {/*    path="/"*/}
                    {/*    element={<MainTable students={students} onDelete={handleDelete} onAdd={handleAdd} />}*/}
                    {/*/>*/}
                    <Route path="/info" element={<InfoPage />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/quiz" element={<Quiz />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

import React from 'react';
import PomodoroTimer from "./PomodoroTimer";
import BlogSlider from "./BlogSlider";
import BlogToggler from "./BlogToggler";

const Blog = () => {
    return (
        <div>
            <PomodoroTimer />
            <BlogSlider />
            <BlogToggler />
        </div>
    );
};

export default Blog;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            <h1>Welcome to projects!</h1>
            <NavLink to = "/home">home</NavLink>
        </div>
    )
}

export default Projects;
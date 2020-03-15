import React from 'react';
import NewProject from '../projects/newProject';
import ProjectList from '../projects/ProjectList';

const SideBar = () => (
    <aside>
        <h1>Project<span> Management</span></h1>
        <NewProject />
        <div className="proyectos">
            <h2>Tus Proyectos</h2>
            <ProjectList />
        </div>
    </aside>
);

export default SideBar;
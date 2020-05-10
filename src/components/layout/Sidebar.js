import React from 'react';
import NewProject from '../projects/NewProject';
import ProjectList from '../projects/ProjectList';

const SideBar = () => (
    <aside>
        <h1 className="green-color">Project<span> Management</span></h1>
        <NewProject />
        <div className="proyectos">
            <h2 className="green-color">Tus Proyectos</h2>
            <ProjectList />
        </div>
    </aside>
);

export default SideBar;
import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import Sidebar from './components/Sidebar';
import SelectedProject from './components/selectedProject';

function App() {
  const [projects, setProjects] = useState({
    selectedProject: undefined,
    projectsArray: [],
  });

  function handleStartAddProject() {
    setProjects((prevValues) => {
      return {
        ...prevValues,
        selectedProject: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjects((prevValues) => {
      return {
        ...prevValues,
        selectedProject: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjects((prevValues) => {
      return {
        ...prevValues,
        selectedProject: id,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjects((prevValues) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevValues,
        selectedProject: undefined,
        projectsArray: [...prevValues.projectsArray, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjects((prevValues) => {
      return {
        ...prevValues,
        selectedProject: undefined,
        projectsArray: prevValues.projectsArray.filter(
          (project) => project.id !== prevValues.selectedProject
        ),
      };
    });
  }

  const selectedProject = projects.projectsArray.find(
    (project) => project.id === projects.selectedProject
  );

  let content = (
    <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
  );

  if (projects.selectedProject === null) {
    content = (
      <NewProject onCancel={handleCancelAddProject} onAdd={handleAddProject} />
    );
  } else if (projects.selectedProject === undefined) {
    content = <NoProjectSelected onAddProject={handleStartAddProject} />;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar
        onAddProject={handleStartAddProject}
        projects={projects.projectsArray}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;

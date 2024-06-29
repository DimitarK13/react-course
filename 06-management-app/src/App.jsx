import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import Sidebar from './components/Sidebar';

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

  let content;

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
      />
      {content}
    </main>
  );
}

export default App;

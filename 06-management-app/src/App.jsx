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

  console.log(projects.projectsArray);

  let content;

  if (projects.selectedProject === null) {
    content = <NewProject onAdd={handleAddProject} />;
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

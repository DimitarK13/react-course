import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import Sidebar from './components/Sidebar';

function App() {
  const [projects, setProjects] = useState({
    selectedProject: undefined,
    projectsArray: [],
  });

  function handleAddProject() {
    setProjects((prevValues) => {
      return {
        ...prevValues,
        selectedProject: null,
      };
    });
  }

  let content;

  if (projects.selectedProject === null) {
    content = <NewProject />;
  } else if (projects.selectedProject === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject} />;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar onAddProject={handleAddProject} />
      {content}
    </main>
  );
}

export default App;

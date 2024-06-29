import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import Sidebar from './components/Sidebar';
import SelectedProject from './components/selectedProject';

function App() {
  const [projects, setProjects] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(task) {
    setProjects((prevValues) => {
      const taskId = Math.random();

      const newTask = {
        text: task,
        projectId: prevValues.selectedProject,
        id: taskId,
      };

      return {
        ...prevValues,
        tasks: [...prevValues.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjects((prevValues) => {
      return {
        ...prevValues,
        tasks: prevValues.tasks.filter((task) => task.id !== id),
      };
    });
  }

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
      const projectId = Math.random();

      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevValues,
        selectedProject: undefined,
        projects: [...prevValues.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjects((prevValues) => {
      return {
        ...prevValues,
        selectedProject: undefined,
        projects: prevValues.projects.filter(
          (project) => project.id !== prevValues.selectedProject
        ),
      };
    });
  }

  const selectedProject = projects.projects.find(
    (project) => project.id === projects.selectedProject
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projects.tasks}
    />
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
        projects={projects.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projects.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;

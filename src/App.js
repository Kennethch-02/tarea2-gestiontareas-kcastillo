import React, { useEffect, useState } from 'react';
import Task from './components/TaskComponent/Task';
import FilterTask from './components/FilterTaskComponent/FilterTask';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [completedFilter, setCompletedFilter] = useState('all');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.log(error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCompletedFilterChange = (event) => {
    setCompletedFilter(event.target.value);
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearchTerm = task.title.toLowerCase().includes(searchTerm.toLowerCase()) || task.id.toString().includes(searchTerm);
    const matchesCompletedFilter = completedFilter === 'all' || (completedFilter === 'completed' && task.completed) || (completedFilter === 'incompleted' && !task.completed);
    return matchesSearchTerm && matchesCompletedFilter;
  });

  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  };

  const taskContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  };

  return (
    <div style={appStyle}>
      <h1>Task Manager</h1>
      <FilterTask
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        completedFilter={completedFilter}
        onCompletedFilterChange={handleCompletedFilterChange}
      />
      <div style={taskContainerStyle}>
        {filteredTasks.map(task => (
          <Task key={task.id} number={task.id} title={task.title} completed={task.completed} />
        ))}
      </div>
    </div>
  );
}

export default App;
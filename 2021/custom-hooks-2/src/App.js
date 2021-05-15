import React, { useCallback, useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = useCallback(taskObject => {
    const tasks = [];

    for(let key in taskObject) {
      let task = taskObject[key];

      tasks.push({id: key, text: task.text});
    }

    setTasks(tasks);
  }, []);

  const {isLoading, error, sendRequest: fetchTasks} = useHttp(transformTasks);

  useEffect(() => {
    fetchTasks({
      url: 'https://react-http-689f4-default-rtdb.firebaseio.com/tasks.json'
    });
  }, [fetchTasks]);

  const taskAddHandler = useCallback(task => {
    setTasks((prevTasks) => prevTasks.concat(task));
  }, []);

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;

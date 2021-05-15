import { useCallback } from 'react';
import useHttp from '../../hooks/use-http';
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const {onAddTask} = props;

  const createTask = useCallback((taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: 'Does not work the way it should be...' };

    onAddTask(createdTask);
  },[onAddTask]);

  const {isLoading, error, sendRequest: sendTask} = useHttp(createTask);
  // const {isLoading, error, sendRequest: sendTask} = useHttp();

  const enterTaskHandler = async (taskText) => {
    sendTask({
      url: 'https://react-http-689f4-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: {text: taskText}
    });

    // sendTask({
    //   url: 'https://react-http-689f4-default-rtdb.firebaseio.com/tasks.json',
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: {text: taskText}
    // }, createTask.bind(null, taskText));
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;

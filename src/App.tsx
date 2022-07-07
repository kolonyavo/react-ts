import './App.css';
import './composant/components.css'
import React, {FC, ChangeEvent, useState} from 'react';
import { Task } from './composant/interface';
import { TodoTask } from './composant/TodoTask';

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [todoList, setTodoList] = useState<Task[]>([]);
  const [inprogressList, setInProgressList] = useState<Task[]>([]);
  const [doneList, setDoneList] = useState<Task[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task"){
      setTask(event.target.value);
    }
  };

  //add tasks
  const addDoneTask = (): void => {
    const newTask = {description: task, status: status};
    setDoneList([...doneList, newTask]);
    setTask("")
  };

  const addTodoTask = (): void => {
    const newTask = {description: task, status: status};
    setTodoList([...todoList, newTask]);
    setTask("")
  };

  const addInprogressTask = (): void => {
    const newTask = {description: task, status: status};
    setInProgressList([...inprogressList, newTask]);
    setTask("")
  };

  //remove tasks
  const removeTaskTodo = (descriptionToDelete: string): void => { 
    setTodoList(todoList.filter((task) => {
      setTask(descriptionToDelete)
      return task.description != descriptionToDelete
    }))
  };

  const removeTaskInProgress = (descriptionToDelete: string): void => { 
    setInProgressList(todoList.filter((task) => {
      setTask(descriptionToDelete)
      return task.description != descriptionToDelete
    }))
  };

  const removeTaskDone = (descriptionToDelete: string): void => { 
    setDoneList(todoList.filter((task) => {
      setTask(descriptionToDelete)
      return task.description != descriptionToDelete
    }))
  };

  return (
    <>
      <div className="App"> 
        <div className='flex'>
          <label className='espace'>Description: </label>
          <input className='espace task' 
            type="text" 
            placeholder='Enter here your task...' 
            name='task' onChange={handleChange}
            value={task}
          />
          <div className='row'>
            <label className='espace'>Status: </label>
            <button className='btn' onClick={addTodoTask}>To do</button>
            <button className='btn' onClick={addInprogressTask}>In progress</button>
            <button className='btn' onClick={addDoneTask}>Done</button>
          </div>
        </div>
      </div>
      <div className='flex-row'>
        <div className='todoList' >To do
          <div className='content'>
            {todoList.map((task: Task) => {
              return <TodoTask task={task} removeTask={removeTaskTodo}/>
            })}
          </div>
        </div>
        <div className='todoList' >In Progress
          <div className='content'>
            {inprogressList.map((task: Task) => {
              return <TodoTask task={task} removeTask={removeTaskInProgress}/>
            })}
          </div>
        </div>
          <div className='todoList'>Done
            <div className='content'>
              {doneList.map((task: Task) => {
                return <TodoTask task={task} removeTask={removeTaskDone}/>
              })}
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
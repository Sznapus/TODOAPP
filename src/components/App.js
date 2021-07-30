import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import Header from './Header/Header';
import AddTask from './AddTask/AddTask'
import SelectSort from './SelectSort/SelectSort';
import TaskList from './TaskList/TaskList'
import Footer from './Footer/Footer';
import Popup from './Popup/Popup';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: calc(100% - 50px);
  background-color: gainsboro;
  overflow: hidden;
  `
function App() {
  
  const retrievedObject = JSON.parse(localStorage.getItem("obj")) || [];
  const minDate = new Date().toISOString().slice(0, 10);
  

  const [value, setValue] = useState('');
  const [priority, setPriority] = useState(false);
  const [tasks, setTasks] = useState(retrievedObject);
  const [date, setDate] = useState(minDate);
  const [select, setSelect] = useState('abc');
  const [message, setMessage] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  
  const handleDate = (e) => {
    setDate(e.target.value)
  }
  const handlePriority = () => {
    setPriority(!priority)
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      if(value){
        setTasks(preventTask => ([...preventTask, {
            id: uuidv4(),
            name: value,
            date: date,
            done: false,
            priority: priority,
          }]));
        setValue('');
      }
    }  

  const handleRemove = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);

    setTasks(newTasks);
  }

  const handleDone = (id) => {
      setTasks(
        tasks.map(task => {
          if(task.id === id){
            return {
              ...task,
              done: !task.done
            }
          }
          return task;
        })
      )
  }

  const handleSelect = (e) => {
    setSelect(e.target.value)
  }

  useEffect(() => {
    if(select === "abc"){      
      const newTasks = tasks.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      setTasks([...newTasks]);

  } if(select === "dataUp"){
      const newTasks = tasks.sort((a,b) => {
        return new Date(a.date) - new Date(b.date)
      });
      setTasks([...newTasks])

  } else if (select === "dataDown") {
      const newTasks = tasks.sort((a,b) => {
        return new Date(b.date) - new Date(a.date)
      });
      setTasks([...newTasks])
  }
  }, [select])

  const showMessage = () => {
    setMessage(!message);
  }
  
  const removeAll = () => {
    setTasks([]);
    setMessage(false);
  }

  const switchOff = () => {
    setMessage(false);
  }

  localStorage.setItem("obj", JSON.stringify(tasks));  
  
  return (
    <Container>
      <Header />
      <AddTask 
        value={value} 
        date={date}
        minDate={minDate}
        handleDate={handleDate}
        handleSubmit={handleSubmit} 
        handleChange={handleChange} 
        handlePriority={handlePriority}
      />
      {message === true ? <Popup switchOff={switchOff} removeAll={removeAll} /> : null}
      <SelectSort 
        value={select}
        handleSelect={handleSelect}
        showMessage={showMessage}
      />
      <TaskList
        tasks={tasks}
        handleDone={handleDone}
        handleRemove={handleRemove} 
        minDate={minDate}
      />
      <Footer 
      tasks={tasks}
       />
    </Container>
  );
}

export default App;

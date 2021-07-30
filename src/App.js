import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import React, { useState } from 'react';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer'
import { AddTodo } from './MyComponents/AddTodo'

function App() {
  const onDelete = (todo) =>{

    //deleting a todo
    console.log("Item Deleted");
    setTodos(todos.filter((e)=> {
      return e.sr!== todo.sr;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sr: 1,
      title: "Birthday", 
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam provident magnam nulla fugit!"
    },
    {
      sr: 2,
      title: "party", 
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam provident magnam nulla fugit!"
    },
    {
      sr: 3,
      title: "visit", 
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam provident magnam nulla fugit!"
    },
  ]);
  return (
  <>
    <Header/>
    <AddTodo/>
    <Todos todos ={todos} onDelete={onDelete}/>
    <Footer/>

  </>
  );
}

export default App;

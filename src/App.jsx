import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import './App.css'

const App = () => {
  return (
    <main className="container">
      <h1>Aplicación de Tareas</h1>
      <div className="grid">
        <TaskForm />
        <TaskList />
      </div>
    </main>



  );
};

export default App;

import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // ? Crear tarea
  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  // ? Eliminar tarea
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // * Lo vamos a utilizar para una vez que cargue el componente pasemos el valor de las tareas a nuestro estado vacío
  useEffect(() => {
    setTasks(data);

    // return () => {
    //   second
    // }
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

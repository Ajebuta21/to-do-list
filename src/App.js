import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import ToDo from "./components/ToDo";
import UpdateForm from "./components/UpdateForm";

const App = () => {
  //task (to do lis) state
  const [toDo, setToDo] = useState([]);
  //temp state
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
  //add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };
  //delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };
  //mark task done
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return({ ...task, status: !task.status})
      }
      return task
    })
    setToDo(newTask)
  };
  //cancel update
  const cancelUpdate = () => {
    setUpdateData('')
  };
  //change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry)
  };
  //update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id)
    let updateObject = [...filterRecords, updateData]
    setToDo(updateObject)
    setUpdateData('')
  };

  return (
    <div className="bg-slate-950 w-full h-screen flex justify-center items-center">
      <div className="lg:w-1/2 md:w-3/4 w-11/12 h-3/4 flex flex-col items-center py-8">
        <h1 className="text-sky-600 font-bold text-3xl mb-4">To do list app</h1>
        {updateData && updateData ? (
          <UpdateForm
            updateData={updateData}
            changeTask={changeTask}
            updateTask={updateTask}
            cancelUpdate={cancelUpdate}
          />
        ) : (
          <AddTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
        )}

        <div className="w-5/6 h-4/6 overflow-y-auto items-center flex flex-col">
          {toDo && toDo.length ? (
            ""
          ) : (
            <h4 className="text-yellow-300 text-sm">No tasks...</h4>
          )}
          <ToDo
            toDo={toDo}
            markDone={markDone}
            setUpdateData={setUpdateData}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

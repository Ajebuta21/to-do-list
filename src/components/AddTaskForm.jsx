import React from 'react'

const AddTaskForm = ({newTask, setNewTask, addTask}) => {
  return (
    <div className="w-10/12 rounded-md text-sm flex gap-2 mb-2">
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        type="text"
        className="w-8/12 py-1 px-3 rounded-md outline-none"
      />
      <button
        onClick={addTask}
        className="w-4/12 py-1 bg-sky-600 text-white rounded-md hover:opacity-50 transition duration-500 ease-in-out"
      >
        Add task
      </button>
    </div>
  );
}

export default AddTaskForm
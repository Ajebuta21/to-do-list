import React from 'react'

const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  return (
    <div className="w-10/12 rounded-md text-sm flex gap-2 mb-2">
      <input
        value={updateData && updateData.title}
        onChange={(e) => changeTask(e)}
        type="text"
        className="w-6/12 py-1 px-3 rounded-md outline-none"
      />
      <button
        onClick={updateTask}
        className="w-3/12 py-1 bg-sky-600 text-white rounded-md hover:opacity-50 transition duration-500 ease-in-out"
      >
        Update
      </button>
      <button
        onClick={cancelUpdate}
        className="w-3/12 py-1 bg-yellow-300 text-black rounded-md hover:opacity-50 transition duration-500 ease-in-out"
      >
        Cancel
      </button>
    </div>
  );
};

export default UpdateForm
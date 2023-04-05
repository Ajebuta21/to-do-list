import React from 'react'
import { FaCheckCircle, FaPen, FaTrashAlt } from "react-icons/fa";

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  return (
    <>
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div
                  className={`flex w-full py-1 px-3 gap-2 bg-slate-900 mb-1 justify-between items-center rounded-md relative ${
                    task.status ? "line-through opacity-60" : ""
                  }`}
                >
                  <div className="flex gap-2 items-center justify-start w-4/5">
                    <span className="text-sky-600 text-xs flex items-center justify-center border border-sky-600 rounded-full w-5 h-5">
                      {index + 1}
                    </span>
                    <span className=" w-11/12 text-sky-600 text-md">
                      {task.title}
                    </span>
                  </div>
                  <div className="flex justify-center w-1/5 items-center gap-3 text-yellow-300 text-sm">
                    <span
                      onClick={(e) => markDone(task.id)}
                      title="completed / not completed"
                      className="hover:text-sky-600 transition ease-out duration-500"
                    >
                      <FaCheckCircle />
                    </span>
                    {task.status ? null : (
                      <span
                        onClick={() =>
                          setUpdateData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false,
                          })
                        }
                        title="edit"
                        className="hover:text-sky-600 transition ease-out duration-500"
                      >
                        <FaPen />
                      </span>
                    )}

                    <span
                      onClick={() => deleteTask(task.id)}
                      title="delete"
                      className="hover:text-sky-600 transition ease-out duration-500"
                    >
                      <FaTrashAlt />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};

export default ToDo
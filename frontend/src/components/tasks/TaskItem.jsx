import { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import TaskForm from "./TaskForm";
import { PencilIcon, TrashIcon, ClockIcon } from "@heroicons/react/24/outline";
import PriorityBadge from "../ui/PriorityBadge";
import StatusBadge from "../ui/StatusBadge";

const TaskItem = ({ task }) => {
  const { deleteTask } = useTasks();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await deleteTask(task._id);
    }
  };

  return (
    <>
      <div className="relative bg-white border rounded-xl shadow-sm p-5 transition hover:shadow-md">
        {/* Edit + Delete Icons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="text-indigo-600 hover:text-indigo-800"
          >
            <PencilIcon className="w-5 h-5" />
          </button>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {task.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3">
          {task.description || "No description provided."}
        </p>

        {/* Due Date */}
        {task.dueDate && (
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <ClockIcon className="h-4 w-4 mr-2" />
            {new Date(task.dueDate).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        )}

        {/* Badges */}
        <div className="flex items-center gap-2">
          <PriorityBadge priority={task.priority} />
          <StatusBadge status={task.status} />
        </div>
      </div>

      <TaskForm
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        taskToEdit={task}
      />
    </>
  );
};

export default TaskItem;

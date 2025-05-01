import { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import TaskFormModal from "./TaskForm";
import {
  CheckIcon,
  PencilIcon,
  TrashIcon,
  ClockIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
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
      <li className="p-4 hover:bg-gray-50">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-medium text-gray-900 truncate">
                {task.title}
              </h3>
              <PriorityBadge priority={task.priority} />
              <StatusBadge status={task.status} />
            </div>
            <p className="text-gray-600 mb-2">{task.description}</p>
            {task.dueDate && (
              <div className="flex items-center text-sm text-gray-500">
                <ClockIcon className="h-4 w-4 mr-1" />
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </div>
            )}
          </div>
          <div className="ml-4 flex-shrink-0 flex space-x-2">
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="text-indigo-600 hover:text-indigo-900"
            >
              <PencilIcon className="h-5 w-5" />
            </button>
            <button
              onClick={handleDelete}
              className="text-red-600 hover:text-red-900"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </li>

      <TaskFormModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        taskToEdit={task}
      />
    </>
  );
};

export default TaskItem;

import { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import TaskItem from "./TaskItem";
import Spinner from "../ui/Spinner";
import EmptyState from "../ui/EmptyState";

const TaskList = () => {
  const { tasks, loading, error } = useTasks();
  const [filter, setFilter] = useState("All Task"); // ✅ set default to match button label

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All Task") return true;
    return task.status === filter;
  });

  if (loading) return <Spinner />;
  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (tasks.length === 0) return <EmptyState />;

  return (
    <div>
      <div className="flex items-center p-4 border-b">
        <div className="flex space-x-2">
          {[
            "All Task",
            "Pending",
            "On Going",
            "Done",
            "Collaborative Task",
          ].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-full text-sm capitalize ${
                filter === f
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {f.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {filteredTasks.map((task) => (
          <TaskItem key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

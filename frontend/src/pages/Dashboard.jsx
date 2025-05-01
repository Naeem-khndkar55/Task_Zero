import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskList from "../components/tasks/TaskList";
import TaskFormModal from "../components/tasks/TaskForm";
import StatsCard from "../components/ui/StatsCard";
import { PlusIcon } from "@heroicons/react/24/outline";

const Dashboard = () => {
  const { tasks, getTasks, loading } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Task Dashboard</h1>
        <TaskFormModal
          triggerButton={
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              <PlusIcon className="h-5 w-5" />
              Add Task
            </button>
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard title="Total Tasks" value={tasks.length} icon="📋" />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <TaskList />
      </div>
    </div>
  );
};

export default Dashboard;

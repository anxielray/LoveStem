export default function ProgressCard({ user="Student", progress=42 }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{user}</h3>
      <p className="text-gray-700 dark:text-gray-300 mt-2">Course Progress: {progress}%</p>
      <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded mt-2">
        <div
          className="bg-blue-500 h-3 rounded transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

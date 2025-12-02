export default function Sandbox() {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-lg transition-colors duration-300">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Interactive Sandbox</h3>
      <p className="text-gray-700 dark:text-gray-200">Simulate physics experiments here.</p>
      {/* Add interactive content here */}
      <div className="mt-4 h-48 bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center">
        Sandbox Area
      </div>
    </div>
  );
}

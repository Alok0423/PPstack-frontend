// src/components/ui/ProgressBar.jsx

export default function ProgressBar({ value = 50 }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div
        className="bg-primaryBlue h-2 transition-all duration-300"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

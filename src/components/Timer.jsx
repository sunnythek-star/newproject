export default function Timer({ time }) {
  return (
    <div className="text-center mb-6">
      <div className="text-3xl font-bold text-indigo-600">
        ⏱️ {time}초
      </div>
    </div>
  );
}


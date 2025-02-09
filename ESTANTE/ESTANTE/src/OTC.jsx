function OTC() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">OTC</h1>
      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="p-2 border border-gray-500 rounded-lg bg-gray-100"
          >
            {/* Hidden scrollbar */}
            <div className="max-w-full overflow-x-auto hide-scrollbar">
            <div className="flex w-max gap-2">
                {Array.from({ length: 30 }).map((_, colIndex) => (
                  <div
                    key={colIndex}
                    className="w-12 h-12 bg-blue-500 border border-black rounded-md shadow-md flex items-center justify-center"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OTC;

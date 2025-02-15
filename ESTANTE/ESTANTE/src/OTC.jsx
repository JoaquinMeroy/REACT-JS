import { useState, useEffect } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

function OTC() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [rows, setRows] = useState(Array.from({ length: 6 }, () => []));
  const [showAddModal, setShowAddModal] = useState(false);
  const [newBoxName, setNewBoxName] = useState("");
  const [rowToAdd, setRowToAdd] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedRow !== null ? "hidden" : "auto";
  }, [selectedRow]);

  const addNewBox = () => {
    if (rowToAdd !== null && newBoxName.trim()) {
      setRows((prevRows) =>
        prevRows.map((row, index) =>
          index === rowToAdd ? [...row, newBoxName] : row
        )
      );
      setNewBoxName("");
      setShowAddModal(false);
      setRowToAdd(null);
    }
  };

  return (
    <div className="min-h-screen overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">OTC</h1>
      <div className="space-y-4">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`p-2 rounded-lg bg-gray-100 flex items-center gap-2 transition-all ${
              selectedRow === rowIndex
                ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-3/4 h-[90vh] bg-white z-50 shadow-lg flex flex-col p-6 overflow-y-auto max-h-screen"
                : ""
            }`}
          >
            <button
              className="p-2 bg-gray-700 text-white rounded-md"
              onClick={() => setSelectedRow(rowIndex)}
            >
              View
            </button>
            <div className="max-w-full overflow-x-auto hide-scrollbar flex-1">
              <div className="flex w-max gap-2">
                {row.map((box, colIndex) => (
                  <div key={colIndex} className="flex flex-col items-center p-2 rounded-md border border-black">
                    <div
                      className="w-24 h-24 md:w-20 md:h-20 bg-gray-400 rounded-md shadow-md flex flex-col items-center justify-center text-center relative overflow-hidden p-2"
                    >
                      <span className="absolute top-1 right-1 text-xs text-white bg-black px-1 rounded">
                        {rowIndex + 1}-{colIndex + 1}
                      </span>
                      <span className="text-white font-bold text-xs w-full flex items-center justify-center p-1 text-center leading-tight break-all">
                        {box}
                      </span>
                    </div>
                    {selectedRow === rowIndex && (
                      <div className="flex gap-2 mt-2 p-2 w-full justify-center">
                        <button className="p-2 bg-gray-700 text-white rounded-full border border-black">
                          <FiEdit size={18} />
                        </button>
                        <button className="p-2 bg-red-500 text-white rounded-full border border-black">
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <button
              className="p-2 bg-green-500 text-white rounded-md"
              onClick={() => {
                setRowToAdd(rowIndex);
                setShowAddModal(true);
              }}
            >
              Add
            </button>
          </div>
        ))}
      </div>

      {selectedRow !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto"
          onClick={() => setSelectedRow(null)}
        ></div>
      )}

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4">
            <h2 className="text-xl font-bold">Add New Box</h2>
            <input
              type="text"
              className="border p-2 rounded w-full"
              placeholder="Enter box name"
              value={newBoxName}
              onChange={(e) => setNewBoxName(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button className="p-2 bg-gray-500 text-white rounded-md" onClick={() => setShowAddModal(false)}>
                Cancel
              </button>
              <button className="p-2 bg-green-500 text-white rounded-md" onClick={addNewBox}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OTC;

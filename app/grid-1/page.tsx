import React from "react";

function Grid1() {
  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-6 h-screen bg-gray-100">
        <div className="col-span-3 bg-green-200">
          header - I take up three columns
        </div>

        <div className="bg-teal-200 row-span-4">
          content - I take up one column
        </div>
        <div className="bg-orange-200 row-span-4">
          content - I take up one column
        </div>
        <div className="bg-yellow-200 row-span-4">
          content - I take up one column
        </div>
        <div className="col-span-3 bg-pink-200 row-span-1">
          footer - I take up three column
        </div>
      </div>
    </div>
  );
}

export default Grid1;

import React, { useState, useEffect } from "react";

function Checkbox({ label, isChecked, onToggle }) {
  const toggleCheckbox = () => {
    onToggle(label);
  };

  return (
    <div
      className={`border-2 border-transparent bg-white py-3 w-full my-2 rounded-md  ${
        isChecked ? "line-through" : ""
      }  `}
      style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}
    >
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
          className="mx-5 h-3 w-3"
        />
        {label}
      </label>
    </div>
  );
}

export default Checkbox;

import React from "react";
import "./App.css";
import CheckboxList from "./components/CheckboxList";

function App() {
  return (
    <div>
      <div className="bg-[#000080] text-white">
        <div className="sm:mx-20 mx-10">
          <h1 className="py-5 font-bold text-xl">
            SEO Best Practice Guideline
          </h1>
        </div>
      </div>
      <div className="sm:mx-20 mx-10 pb-10">
        <CheckboxList />
      </div>
    </div>
  );
}

export default App;

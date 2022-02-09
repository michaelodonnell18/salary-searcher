import React from "react";
import './App.css';
import SearchBar from "./Components/SearchBar";
//import JobData from "./Data.json"

function App() {
  return <div className="App">
    <SearchBar placeholder="Enter a job title or description" /*data={api req or excel sheet info}*/ />
    </div>;
  
}

export default App;

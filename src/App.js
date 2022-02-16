import React from "react";
import './App.css';
import SearchBar from "./Components/SearchBar";

function App() {
  return <div className="App">
    <SearchBar placeholder="Search for a job title" /*data={api req or excel sheet info}*/ />
    </div>;
  
}

export default App;

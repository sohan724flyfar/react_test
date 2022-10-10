import React from "react";
import FileUpload from "./components/FileUpload";
import PreFillForm from "./components/PreFillForm";
import "./App.css";
import DynamicForm from "./components/DynamicForm/DynamicForm";

const App = () => (
  <div className="container mt-4">
    <h4 className="display-4 text-center mb-4">
      <i className="fab fa-react" /> React Test
    </h4>

    {/* <FileUpload /> */}
    {/* <PreFillForm /> */}
    {/* todo: Dynamic form */}
    <DynamicForm />
  </div>
);

export default App;

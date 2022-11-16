import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import FileUpload from "./components/FileUpload";
import PreFillForm from "./components/PreFillForm";
import "./App.css";
import DynamicForm from "./components/DynamicForm/DynamicForm";
import Home from "./components/Home/Home";
import FileUploadComponet from "./components/FileUploadComponent/FileUploadComponet";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dynamicform" element={<DynamicForm />} />
      {/* <Route path="fileupload" element={<FileUpload />} /> */}
      <Route path="fileupload" element={<FileUploadComponet />} />
      <Route path="prefillform" element={<PreFillForm />} />
    </Routes>
  </BrowserRouter>
);

export default App;

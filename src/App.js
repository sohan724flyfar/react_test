import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import FileUpload from "./components/FileUpload";
import PreFillForm from "./components/PreFillForm";
import DynamicForm from "./components/DynamicForm/DynamicForm";
import Home from "./components/Home/Home";
import FileUploadComponet from "./components/FileUploadComponent/FileUploadComponet";
import { ReactQuery } from "./components/ReactQuery/ReactQuery";
import { RQSuperHeroesPage } from "./components/ReactQuery/RQSuperHeroesPage";
import { SuperHeroesPage } from "./components/ReactQuery/SuperHeroesPage";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rq-home" element={<ReactQuery />} />
        <Route path="/super-hero" element={<SuperHeroesPage />} />
        <Route path="/rq-super-heros" element={<RQSuperHeroesPage />} />
        <Route path="dynamicform" element={<DynamicForm />} />
        <Route path="fileupload" element={<FileUploadComponet />} />
        <Route path="prefillform" element={<PreFillForm />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;

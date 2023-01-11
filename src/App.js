import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
  NavLink,
} from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <NavLink
              to="/rq-home"
              style={{
                textDecoration: "none",
                color: "white",
                textTransform: "uppercase",
                margin: "0px 5px",
              }}
            >
              home
            </NavLink>
            <NavLink
              to="/super-hero"
              style={{
                textDecoration: "none",
                color: "white",
                textTransform: "uppercase",
                margin: "0px 5px",
              }}
            >
              Super Heros
            </NavLink>
            <NavLink
              to="/rq-super-heros"
              style={{
                textDecoration: "none",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              RQ Super Heros
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>
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
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
  </QueryClientProvider>
);

export default App;

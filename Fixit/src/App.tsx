import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";

import MainLayout from "./layouts/MainLayout";
import ProjectPage from "./pages/ProjectPage";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import MyJobsPage from "./pages/MyJobsPage";
import CreateProjectPage from "./pages/CreateProjectPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/my-jobs" element={<MyJobsPage />} />
      <Route path="/login-register" element={<LoginRegisterPage />} />
      <Route path="/job-details/:id" element={<ProjectPage />} />
      <Route path="/create-project" element={<CreateProjectPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

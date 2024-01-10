import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./config/routes";

function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;

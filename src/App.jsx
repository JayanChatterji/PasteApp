import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/";
import NavBar from "./components/NavBar";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="w-full h-full flex flex-col">
          <NavBar />
          <Home />
        </div>
      ),
    },
    {
      path: "/pastes",
      element: (
        <div className="w-full h-full flex flex-col">
          <NavBar />
          <Paste />
        </div>
      ),
    },
    {
      path: "/pastes/:id",
      element: (
        <div className="w-full h-full flex flex-col">
          <NavBar />
          <ViewPaste />
        </div>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

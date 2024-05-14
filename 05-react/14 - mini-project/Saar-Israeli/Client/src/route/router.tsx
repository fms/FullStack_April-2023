import { createBrowserRouter } from "react-router-dom";
import PersonalDogPage from "../pages/dogPage/PersonalDogPage";
import DogHomePage from "../pages/homePage/DogHomePage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "", element: <DogHomePage /> },
      { path: "dog/:breed", element: <PersonalDogPage /> },
      { path: "*", element: <div>Not found</div> },
    ],
  },
]);
export default router;

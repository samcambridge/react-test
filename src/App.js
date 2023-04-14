import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Question from "./components/Question";
import Finish from "./components/Finish";
import styles from "./styles/App.module.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Question />,
  },
  {
    path: "/questions/end",
    element: <Finish />,
  },
  {
    path: "/questions/:id",
    element: <Question />,
  }
]);

function App() {
  return (
    <div className={styles.container}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

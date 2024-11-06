import { RouterProvider } from "react-router-dom";

import AppRouter from "./routes/app-routes";

function App() {
  console.log();
  return <RouterProvider router={AppRouter} />;
}

export default App;

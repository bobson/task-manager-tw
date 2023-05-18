import { Routes, Route } from "react-router-dom";

import { boards } from "../data.json";
import Layoyt from "./components/Layout/Layout";
import PlatformLaunch from "./pages/PlatformLaunch";
import MarketingPlan from "./pages/MarketingPlan";
import Roadmap from "./pages/Roadmap";

function App() {
  return (
    <Layoyt data={boards}>
      <div className="flex w-11/12 m-auto mt-5 mb-5 gap-4">
        <Routes>
          <Route
            path="/"
            element={<PlatformLaunch data={boards[0].columns} />}
          />
          <Route
            path="marketing"
            element={<MarketingPlan data={boards[1].columns} />}
          />
          <Route
            path="roadmap"
            element={<Roadmap data={boards[2].columns} />}
          />
        </Routes>
      </div>
    </Layoyt>
  );
}

export default App;

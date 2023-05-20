import { Routes, Route } from "react-router-dom";

import { boards } from "../data.json";
import Layout from "./components/Layout/Layout";
import PlatformLaunch from "./pages/PlatformLaunch";
import MarketingPlan from "./pages/MarketingPlan";
import Roadmap from "./pages/Roadmap";
import ModalPage from "./pages/ModalPage";

function App() {
  return (
    <Layout data={boards}>
      {/* <div className="flex  h-full p-5 gap-4 border-l-2  border-lines-light dark:border-lines-dark"> */}
      <Routes>
        <Route path="/" element={<PlatformLaunch data={boards[0].columns} />} />

        <Route
          path="marketing"
          element={<MarketingPlan data={boards[1].columns} />}
        />

        <Route path="roadmap" element={<Roadmap data={boards[2].columns} />} />

        <Route path="modal" element={<ModalPage />} />
      </Routes>
      {/* </div> */}
    </Layout>
  );
}

export default App;

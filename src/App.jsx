import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/disclaimer"
          element={<Disclaimer />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
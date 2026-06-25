import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import DestinationPage from "./pages/DestinationPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <main id="main">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/tokyo" element={<DestinationPage city="tokyo" />} />
            <Route path="/osaka" element={<DestinationPage city="osaka" />} />
            <Route path="/kyoto" element={<DestinationPage city="kyoto" />} />
            <Route path="/hokkaido" element={<DestinationPage city="hokkaido" />} />
            <Route path="*" element={<Hero />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

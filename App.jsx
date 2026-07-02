import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Apod from "./pages/Apod";
import MarsRover from "./pages/MarsRover";
import NeoDashboard from "./pages/NeoDashboard";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-space-900 dark:bg-space-950 dark:text-slate-100">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apod" element={<Apod />} />
          <Route path="/mars-rover" element={<MarsRover />} />
          <Route path="/neo" element={<NeoDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 dark:border-space-700 dark:text-slate-500">
        Built with data from{" "}
        <a href="https://api.nasa.gov" target="_blank" rel="noreferrer" className="underline hover:text-ion-600 dark:hover:text-ion-400">
          api.nasa.gov
        </a>
      </footer>
    </div>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function App() {
  return (
    <BrowserRouter>
      {/* 🖱️ GLOBAL SMOOTH CURSOR */}
      <SmoothCursor />

      <AnimatePresence mode="wait">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

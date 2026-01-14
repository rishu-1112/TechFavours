import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import About from "./pages/About";
import Contact from "./pages/Contact"
// Blog Pages
import Blog from "./pages/blog";
import BlogSaaS from "./pages/blog/saas";
import BlogAI from "./pages/blog/ai";
import BlogWeb from "./pages/blog/web";
import BlogPost from "./pages/blog/[slug]";
import ScrollToTop from "./ScrollToTop";
export default function App() {
  return (
    <BrowserRouter>
      {/* 🖱️ GLOBAL SMOOTH CURSOR */}
      <SmoothCursor />
      <AnimatePresence mode="wait">
        <ScrollToTop/>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            {/* BLOG */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/saas" element={<BlogSaaS />} />
            <Route path="/blog/ai" element={<BlogAI />} />
            <Route path="/blog/web" element={<BlogWeb />} />

            {/* DYNAMIC BLOG POST */}
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

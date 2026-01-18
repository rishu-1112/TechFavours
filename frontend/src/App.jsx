import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import About from "./pages/About";
import Contact from "./pages/Contact"
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms"
import ServiceProcessTimeline from "./components/services/ServiceProcessTimeline";
// Blog Pages
import Blog from "./pages/blog";
import BlogSaaS from "./pages/blog/saas";
import BlogAI from "./pages/blog/ai";
import BlogWeb from "./pages/blog/web";
import BlogPost from "./pages/blog/[slug]";
import ScrollToTop from "./ScrollToTop";
import ScrollToTopButton from "./ScrollToTopButton";

//service pages
import WebsiteDevelopment from "@/pages/service/WebDev";
import SaaSProductDevelopment from "@/pages/service/SaaSproductDev";
import MobileAppDevelopment from "@/pages/service/MobileAppDev";
import WebsiteManagement from "@/pages/service/WebsiteManagementMaintainance";
import AIAutomation from "@/pages/service/AiAutomationAndWorkflow";
import SEOOptimization from "@/pages/service/SEOandPerformance";
import DigitalMarketing from "@/pages/service/DigitalMarketing";
import ECommerceDevelopment from "@/pages/service/E-commerceGrowth";
import CloudBackendSolutions from "@/pages/service/CloudAndBackend";

//
import WebDevBlogCategory from "@/pages/blog/web";
import SaaSBlogCategory from "@/pages/blog/saas";
import AIBlogCategory from "@/pages/blog/ai";
export default function App() {

  return (
    <BrowserRouter>
      {/* 🖱️ GLOBAL SMOOTH CURSOR */}
      <SmoothCursor />
      <AnimatePresence mode="wait">
        <ScrollToTop/>
        <ScrollToTopButton />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
            <Route path="/terms" element={<Terms/>}/>
            <Route path="/service-process" element={<ServiceProcessTimeline/>}/>
            {/* BLOG */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/saas" element={<BlogSaaS />} />
            <Route path="/blog/ai" element={<BlogAI />} />
            <Route path="/blog/web" element={<BlogWeb />} />
            {/* service paths */}
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/saas-product-development" element={<SaaSProductDevelopment />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/website-management-maintenance" element={<WebsiteManagement />} />
            <Route path="/services/ai-automation-workflow" element={<AIAutomation />} />
            <Route path="/services/seo-performance-optimization" element={<SEOOptimization />} />
            <Route path="/services/digital-marketing-growth" element={<DigitalMarketing />} />
            <Route path="/services/ecommerce-development-scaling" element={<ECommerceDevelopment />} />
            <Route path="/services/cloud-backend-solutions" element={<CloudBackendSolutions />} />

            {/* DYNAMIC BLOG POST */}
            <Route path="/blog/web" element={<WebDevBlogCategory />} />
            <Route path="/blog/saas" element={<SaaSBlogCategory />} />
            <Route path="/blog/ai" element={<AIBlogCategory />} />


          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

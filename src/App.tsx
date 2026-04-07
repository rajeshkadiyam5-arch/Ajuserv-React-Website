import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import Skeleton from "./components/Skeleton";
import { products } from "./data/products";
import { serviceDetails } from "./data/services";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Platforms = lazy(() => import("./pages/Platforms"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const Services = lazy(() => import("./pages/Services"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Contact = lazy(() => import("./pages/Contact"));

// Loading fallback with skeleton
const PageLoader = () => <Skeleton variant="page" />;

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route path="/platforms/finlink" element={<ProductPage product={products.finlink} />} />
            <Route path="/platforms/coursify" element={<ProductPage product={products.coursify} />} />
            <Route path="/platforms/qualev" element={<ProductPage product={products.qualev} />} />
            <Route path="/platforms/facentra" element={<ProductPage product={products.facentra} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/fullstack-development" element={<ProductPage product={serviceDetails["fullstack-development"]} />} />
            <Route path="/services/ai-genai" element={<ProductPage product={serviceDetails["ai-genai"]} />} />
            <Route path="/services/data-cloud" element={<ProductPage product={serviceDetails["data-cloud"]} />} />
            <Route path="/services/infra-security" element={<ProductPage product={serviceDetails["infra-security"]} />} />
            <Route path="/services/elearning" element={<ProductPage product={serviceDetails["elearning"]} />} />
            <Route path="/services/lowcode-nocode" element={<ProductPage product={serviceDetails["lowcode-nocode"]} />} />
            <Route path="/services/workplace-transformation" element={<ProductPage product={serviceDetails["workplace-transformation"]} />} />
            <Route path="/services/staff-augmentation" element={<ProductPage product={serviceDetails["staff-augmentation"]} />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

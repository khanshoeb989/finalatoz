import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar1 from "./components/ui/navbar-1";

const queryClient = new QueryClient();

/* ===============================
   Floating WhatsApp Button
================================ */
const WhatsAppButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2"
    >
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-2 rounded-lg bg-green-600 px-3 py-1 text-sm text-white shadow-lg"
      >
        Chat on WhatsApp
      </motion.span>

      <motion.button
        onClick={() => window.open("https://wa.me/918208951520", "_blank")}
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="relative flex items-center justify-center rounded-full bg-green-500 p-4 shadow-lg shadow-green-300 hover:bg-green-600"
        aria-label="Contact AtoZ Enterprise on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </motion.button>
    </motion.div>
  );
};

/* ===============================
   App Component (SEO Optimized)
================================ */
const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* 🌐 Global SEO Defaults */}
        <Helmet>
          <html lang="en" />

          <title>AtoZ Enterprise | Fire Safety & Industrial Equipment</title>

          <meta
            name="description"
            content="AtoZ Enterprise is a trusted supplier of fire safety systems, industrial automation, and industrial equipment with 7+ years of experience across India."
          />

          <meta
            name="keywords"
            content="fire safety equipment, fire protection systems, industrial automation, industrial tools, AtoZ Enterprise"
          />

          <meta name="author" content="AtoZ Enterprise" />
          <meta name="robots" content="index, follow" />

          {/* Canonical */}
          <link rel="canonical" href="https://atozenterprise.co.in/" />

          {/* Open Graph */}
          <meta property="og:title" content="AtoZ Enterprise | Fire Safety & Industrial Solutions" />
          <meta
            property="og:description"
            content="Reliable fire safety systems and industrial equipment provider with 500+ completed projects."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://atozenterprise.co.in/" />
          <meta property="og:image" content="https://atozenterprise.co.in/og-image.jpg" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <BrowserRouter>
          <Navbar1 />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

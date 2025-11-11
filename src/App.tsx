import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar1 from "./components/ui/navbar-1";

const queryClient = new QueryClient();

// Floating WhatsApp Button Component
const WhatsAppButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2"
    >
      {/* Tooltip Text */}
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-2 rounded-lg bg-green-600 px-3 py-1 text-sm text-white shadow-lg"
      >
        Chat on WhatsApp
      </motion.span>

      {/* WhatsApp Floating Button */}
      <motion.button
        onClick={() => window.open("https://wa.me/918208951520", "_blank")}
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="relative flex items-center justify-center rounded-full bg-green-500 p-4 shadow-lg shadow-green-300 hover:bg-green-600"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </motion.button>
    </motion.div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar1 />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

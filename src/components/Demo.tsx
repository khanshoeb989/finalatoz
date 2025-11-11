"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // ✅ Import Shadcn Button
import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

// 🔹 Rotating text lines (specific to Fire Safety & Industrial field)
const rotatingLines = [
  "Fire Safety ",
  "Industrial Equipment",
  "Armored Joints",
  "Loading Dock ",
  "Smart Safety ",
];

const DEMO_IMAGES = [
  "https://gw-assets.assaabloy.com/is/image/assaabloy/DL6010S_0002_16_9?wid=752",
  "https://www.inforceglobal.com/wp-content/uploads/2022/08/Armourforce-4010-911x1024.jpg",
  "https://www.inforceglobal.com/wp-content/uploads/2022/08/casta-banner-9.jpg",
  "https://www.inforceglobal.com/wp-content/uploads/2023/04/Tuff-Dowel10-Render-2-1-1024x683.png",
  "https://gw-assets.assaabloy.com/is/image/assaabloy/ASSA%20ABLOY%20DL6020TI:1x1?wid=1504&hei=1504",
  "https://imgs.search.brave.com/kRpGSrFIdxw5bnlXbVfLzawbAZBOPcEYz9akueMsqEk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kb2Nr/emlsbGEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA0/L2RvY2t6aWxsYS1s/b2FkaW5nLWRvY2st/bGV2ZWxlci1idWls/dC10by1vcmRlci5q/cGc",
  "https://imgs.search.brave.com/KKm5DopDIfiW2uL8rAbkZFo4ecmN5YyshqJ4AiKV6ZA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9taGUu/ampzZWEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzEw/LzEtMTYuanBn",
  "https://imgs.search.brave.com/jxTliNFgzRabCUseKB2D7PEny3kYj0HZSc0OR2wg3I8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHhm/b3JrbGlmdHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzA0L01jR3VpcmUt/bWVjaGFuaWNhbC1k/b2NrLWxldmVsZXIt/ODQ1eDY4NC5qcGc",
];

export default function AnimatedHeroDemo() {
  const [currentLine, setCurrentLine] = useState(0);

  // 🔁 Rotate text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % rotatingLines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedMarqueeHero
      tagline="Trusted by 1000+ Leading Industries"
      title={
        <div className="flex flex-col items-center justify-center text-center md:text-left">
          {/* Constant heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground"
          >
            Scale Your Safety  with
          </motion.h1>

          {/* Rotating text */}
          <div className="h-20 md:h-24 flex items-center overflow-hidden mt-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentLine}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                // ✅ Match Navbar “Get Quote” hero color
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              >
                {rotatingLines[currentLine]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      }
      description=""
      // ✅ CTA Button uses same hero variant style
     ctaText={<Link to="/products">Explore Products</Link>} images={DEMO_IMAGES}
    />
  );
}

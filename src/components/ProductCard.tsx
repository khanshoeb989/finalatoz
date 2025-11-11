"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: typeof products[0];
}

const ProductCard = ({ product }: ProductCardProps) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  // 🌀 Handle 3D tilt hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = ((y - height / 2) / (height / 2)) * -8;
    const rotateY = ((x - width / 2) / (width / 2)) * 8;
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.4s ease-in-out",
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={cn(
        "relative w-full max-w-[340px] aspect-[9/12] rounded-3xl bg-gradient-to-br from-black via-neutral-900 to-zinc-900 shadow-2xl border border-white/10 overflow-hidden group cursor-pointer transition-all duration-300"
      )}
    >
      {/* 🖼 Product Image */}
      <img
        src={Array.isArray(product.image) ? product.image[0] : product.image}
        alt={product.name}
        className="absolute inset-0 h-full w-full object-contain bg-black rounded-3xl transition-transform duration-500 group-hover:scale-105"
        style={{ transform: "translateZ(-20px)" }}
      />

      {/* 🌈 Animated Glow Border */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 blur-xl animate-pulse" />
      </div>

      {/* ✨ Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-3xl" />

      {/* 🏷️ Product Name */}
      <div
        className="absolute top-5 left-5 right-5 bg-gradient-to-r from-primary/70 via-black/50 to-transparent backdrop-blur-md rounded-xl px-4 py-3 text-center shadow-md border border-white/10"
        style={{ transform: "translateZ(40px)" }}
      >
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide drop-shadow-lg uppercase">
          {product.name}
        </h3>
        
      </div>

      {/* 🧠 Product Info */}
      <div
        className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end backdrop-blur-[2px]"
        style={{ transform: "translateZ(40px)" }}
      >
        

        {/* ✨ View Details Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-5"
        >
          <Button
            variant="hero"
            size="lg"
            className="w-full font-semibold tracking-wide bg-gradient-to-r from-primary via-red-600 to-amber-500 hover:shadow-[0_0_15px_rgba(255,99,71,0.6)] transition-all duration-300"
            asChild
          >
            <Link to={`/products/${product.id}`}>View Details</Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

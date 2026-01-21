"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const DOMAIN = "https://atozenterprise.co.in";

const Products = () => {
  useScrollToTop();

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Catalogue Modal State
  const [openModal, setOpenModal] = useState(false);
  const [catalogueType, setCatalogueType] = useState("");

  const tradingPages = 61;
  const manufacturingPages = 4;

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const openCatalogue = (type: string) => {
    setCatalogueType(type);
    setOpenModal(true);
  };

  const closeCatalogue = () => {
    setOpenModal(false);
    setCatalogueType("");
  };

  return (
    <>
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>
          Industrial & Fire Safety Products | AtoZ Enterprise
        </title>

        <meta
          name="description"
          content="Explore AtoZ Enterprise’s complete range of fire safety systems, industrial equipment, loading dock solutions, and warehouse safety products across India."
        />

        <meta
          name="keywords"
          content="fire safety equipment, industrial equipment supplier India, loading dock solutions, dock levelers, warehouse safety systems, AtoZ Enterprise products"
        />

        <link rel="canonical" href={`${DOMAIN}/products`} />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Industrial & Fire Safety Products | AtoZ Enterprise"
        />
        <meta
          property="og:description"
          content="Browse fire safety systems, industrial equipment, and loading dock solutions by AtoZ Enterprise."
        />
        <meta property="og:url" content={`${DOMAIN}/products`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${DOMAIN}/og-image.jpg`}
        />

        {/* Collection Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "AtoZ Enterprise Products",
            description:
              "Fire safety systems and industrial equipment catalogue by AtoZ Enterprise.",
            url: `${DOMAIN}/products`,
            isPartOf: {
              "@type": "WebSite",
              name: "AtoZ Enterprise",
              url: DOMAIN,
            },
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
        <section
          className="pt-32 pb-20"
          aria-labelledby="products-heading"
        >
          <div className="container mx-auto px-4">
            {/* ================= HEADER ================= */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1
                id="products-heading"
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                Industrial & Fire Safety{" "}
                <span className="text-gradient">Products</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Browse our comprehensive catalogue of fire safety systems,
                industrial equipment, and loading dock solutions engineered
                for performance and safety.
              </p>
            </motion.div>

            {/* ================= CATALOGUE CTA ================= */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
              <Button
                className="px-8 py-4 text-lg shadow-lg"
                onClick={() => openCatalogue("trading")}
                aria-label="View trading catalogue"
              >
                📘 View Trading Catalogue
              </Button>

              <Button
                className="px-8 py-4 text-lg shadow-lg"
                variant="outline"
                onClick={() => openCatalogue("manufacturing")}
                aria-label="View manufacturing catalogue"
              >
                🏭 View Manufacturing Catalogue
              </Button>
            </div>

            {/* ================= CATEGORY FILTER ================= */}
            <nav
              aria-label="Product categories"
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "hero" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className="px-6"
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                </Button>
              ))}
            </nav>

            {/* ================= PRODUCT GRID ================= */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <ProductCard
                    product={{
                      ...product,
                      image:
                        Array.isArray(product.image) && product.image.length
                          ? product.image[0]
                          : "/assets/placeholder.jpg",
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        <Footer />

        {/* ================= CATALOGUE MODAL ================= */}
        <AnimatePresence>
          {openModal && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[999] flex items-center justify-center p-6 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <div className="sticky top-0 flex justify-end bg-white/90 py-2 px-4 border-b">
                  <button
                    onClick={closeCatalogue}
                    className="text-2xl font-bold"
                    aria-label="Close catalogue"
                  >
                    ✕
                  </button>
                </div>

                <h2 className="text-3xl font-bold text-center mt-4 mb-6 capitalize">
                  {catalogueType} Catalogue
                </h2>

                <div className="space-y-6 p-6">
                  {catalogueType === "trading" &&
                    [...Array(tradingPages)].map((_, i) => (
                      <img
                        key={i}
                        src={`/brochures/trading/trading-brochure-page${i + 1}.jpg`}
                        alt={`Trading catalogue page ${i + 1}`}
                        loading="lazy"
                        className="w-full rounded-lg border shadow-lg"
                      />
                    ))}

                  {catalogueType === "manufacturing" &&
                    [...Array(manufacturingPages)].map((_, i) => (
                      <img
                        key={i}
                        src={`/brochures/manufacturing/manufacturing-brochure-page${i + 1}.jpg`}
                        alt={`Manufacturing catalogue page ${i + 1}`}
                        loading="lazy"
                        className="w-full rounded-lg border shadow-lg"
                      />
                    ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default Products;

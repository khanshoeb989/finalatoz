"use client";

import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const images = Array.isArray(product.image) ? product.image : [product.image];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container mx-auto px-4">
          {/* 🔙 Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <Button variant="ghost" asChild>
              <Link to="/products" className="flex items-center text-sm sm:text-base">
                <ArrowLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Back to Products
              </Link>
            </Button>
          </motion.div>

          {/* 🧾 Product Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 mb-16 sm:mb-20">
            {/* 🖼 Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="overflow-hidden mb-4 sm:mb-6">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-[280px] sm:h-[380px] md:h-[420px] object-cover rounded-lg transition-all duration-300"
                />
              </Card>

              {/* 🔍 Thumbnail Images */}
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                {images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`cursor-pointer border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                      selectedImage === img
                        ? "border-primary"
                        : "border-transparent hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 🧠 Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-sm text-primary font-semibold mb-2">
                {product.category}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* 📑 Tabs */}
              <Tabs defaultValue="features" className="mb-8">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                </TabsList>

                <TabsContent value="features" className="mt-6">
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-sm sm:text-base text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="specifications" className="mt-6">
                  <div className="space-y-3 sm:space-y-4">
                    {product.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between flex-wrap border-b border-border pb-3"
                      >
                        <span className="font-semibold text-sm sm:text-base">
                          {spec.label}
                        </span>
                        <span className="text-muted-foreground text-sm sm:text-base">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* 🧭 CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full sm:flex-1 text-sm sm:text-base"
                  asChild
                >
                  <Link to="/contact">Request Quote</Link>
                </Button>
                <Button
                  variant="industrial"
                  size="lg"
                  className="w-full sm:flex-1 text-sm sm:text-base"
                  asChild
                >
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* 🧩 Related Products */}
          {relatedProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-20 sm:mt-24"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {relatedProducts.map((relatedProduct, index) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ProductCard
                      product={{
                        ...relatedProduct,
                        image: Array.isArray(relatedProduct.image)
                          ? relatedProduct.image[0]
                          : relatedProduct.image,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;

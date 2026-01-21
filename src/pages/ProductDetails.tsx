"use client";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const DOMAIN = "https://atozenterprise.co.in";

const ProductDetails = () => {
  useScrollToTop();
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Product Not Found | AtoZ Enterprise</title>
          <meta
            name="description"
            content="The requested product could not be found. Browse our fire safety and industrial equipment catalogue."
          />
          <link rel="canonical" href={`${DOMAIN}/products`} />
        </Helmet>

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

  const images = Array.isArray(product.image)
    ? product.image
    : [product.image];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [id, images]);

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>
          {product.name} | Fire Safety & Industrial Equipment | AtoZ Enterprise
        </title>

        <meta
          name="description"
          content={`${product.name} by AtoZ Enterprise – reliable ${product.category.toLowerCase()} solution designed for industrial safety, durability, and performance across India.`}
        />

        <meta
          name="keywords"
          content={`${product.name}, ${product.category}, fire safety equipment, industrial equipment supplier India, AtoZ Enterprise`}
        />

        <link
          rel="canonical"
          href={`${DOMAIN}/products/${product.id}`}
        />

        {/* Open Graph */}
        <meta property="og:title" content={product.name} />
        <meta
          property="og:description"
          content={product.description}
        />
        <meta
          property="og:image"
          content={`${DOMAIN}${images[0]}`}
        />
        <meta
          property="og:url"
          content={`${DOMAIN}/products/${product.id}`}
        />
        <meta property="og:type" content="product" />

        {/* Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            image: images.map((img) => `${DOMAIN}${img}`),
            description: product.description,
            category: product.category,
            brand: {
              "@type": "Brand",
              name: "AtoZ Enterprise",
            },
            manufacturer: {
              "@type": "Organization",
              name: "AtoZ Enterprise",
              url: DOMAIN,
            },
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: DOMAIN,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Products",
                item: `${DOMAIN}/products`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: product.name,
                item: `${DOMAIN}/products/${product.id}`,
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <section className="pt-28 pb-20">
          <div className="container mx-auto px-4">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Button variant="ghost" asChild>
                <Link to="/products" className="flex items-center">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Products
                </Link>
              </Button>
            </motion.div>

            {/* Product Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Images */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="overflow-hidden mb-6">
                  <img
                    src={selectedImage}
                    alt={`${product.name} industrial equipment`}
                    loading="eager"
                    className="w-full h-[420px] object-cover rounded-lg"
                  />
                </Card>

                <div className="flex flex-wrap gap-4">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`border-2 rounded-lg overflow-hidden ${
                        selectedImage === img
                          ? "border-primary"
                          : "border-transparent"
                      }`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${index + 1}`}
                        loading="lazy"
                        className="w-24 h-24 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-sm font-semibold text-primary">
                  {product.category}
                </span>

                <h1 className="text-4xl font-bold mt-2 mb-4">
                  {product.name}
                </h1>

                <p className="text-lg text-muted-foreground mb-8">
                  {product.description}
                </p>

                <Tabs defaultValue="features">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="specifications">
                      Specifications
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="features" className="mt-6">
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-3" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="specifications" className="mt-6">
                    {product.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between border-b py-2"
                      >
                        <strong>{spec.label}</strong>
                        <span className="text-muted-foreground">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                  <Button variant="industrial" size="lg" asChild>
                    <Link to="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <section aria-labelledby="related-heading">
                <h2
                  id="related-heading"
                  className="text-3xl font-bold text-center mb-10"
                >
                  Related Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {relatedProducts.map((rp) => (
                    <ProductCard
                      key={rp.id}
                      product={{
                        ...rp,
                        image: Array.isArray(rp.image)
                          ? rp.image[0]
                          : rp.image,
                      }}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ProductDetails;

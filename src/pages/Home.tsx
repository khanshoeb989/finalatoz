import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight, Shield, Wrench, Award, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import { products } from "@/data/products";
import Testimonials from "@/components/Testimonials";
import Demo from "../components/Demo";
import SpinningClientLogos from "@/components/LogoCloudCarouselDemo";
import ProductCard from "@/components/ProductCard";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

/* ===============================
   Home Page
================================ */
const Home = () => {
  useScrollToTop();

  const featuredProducts = products.slice(0, 6);
  const [currentLine, setCurrentLine] = useState(0);

  const rotatingLines = [
    "Smart Fire Safety Systems",
    "Industrial Automation Solutions",
    "Reliable Industrial Equipment",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % rotatingLines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= SEO META ================= */}
      <Helmet>
  {/* 🔥 TITLE (MOST IMPORTANT) */}
  <title>
    Fire Safety & Industrial Equipment Supplier in Bhiwandi | AtoZ Enterprise
  </title>

  {/* 🔥 META DESCRIPTION */}
  <meta
    name="description"
    content="AtoZ Enterprise is a trusted fire safety systems and industrial equipment supplier in Bhiwandi, Maharashtra with 7+ years of experience and 500+ completed projects. We provide fire alarm systems, fire extinguishers, hydrant systems, and industrial automation solutions."
  />

  {/* ❗ Keywords are optional but OK */}
  <meta
    name="keywords"
    content="fire safety supplier in Bhiwandi, fire safety systems Bhiwandi, industrial equipment supplier Bhiwandi, fire alarm systems, fire extinguishers supplier, industrial automation, AtoZ Enterprise Bhiwandi"
  />

  {/* 🔗 CANONICAL */}
  <link rel="canonical" href="https://atozenterprise.co.in/" />

  {/* ================= OPEN GRAPH ================= */}
  <meta
    property="og:title"
    content="Fire Safety & Industrial Equipment Supplier in Bhiwandi | AtoZ Enterprise"
  />
  <meta
    property="og:description"
    content="AtoZ Enterprise provides reliable fire safety systems and industrial equipment in Bhiwandi, Maharashtra. Trusted by industries, warehouses, and commercial buildings."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://atozenterprise.co.in/" />
  <meta
    property="og:image"
    content="https://atozenterprise.co.in/og-image.jpg"
  />

  {/* ================= LOCAL BUSINESS SCHEMA (VERY POWERFUL) ================= */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "AtoZ Enterprise",
      url: "https://atozenterprise.co.in",
      logo: "https://atozenterprise.co.in/logo.png",
      image: "https://atozenterprise.co.in/og-image.jpg",
      description:
        "AtoZ Enterprise is a fire safety systems and industrial equipment supplier in Bhiwandi, Maharashtra offering fire alarms, fire extinguishers, hydrant systems, and industrial automation solutions.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bhiwandi",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      areaServed: [
        "Bhiwandi",
        "Mumbai",
        "Thane",
        "Maharashtra",
      ],
      sameAs: [
        "https://www.facebook.com/",
        "https://www.instagram.com/",
        "https://www.linkedin.com/",
      ],
    })}
  </script>

  {/* ================= ORGANIZATION SCHEMA ================= */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "AtoZ Enterprise",
      url: "https://atozenterprise.co.in",
      logo: "https://atozenterprise.co.in/logo.png",
      description:
        "Fire safety and industrial equipment supplier in Bhiwandi with 7+ years of experience.",
    })}
  </script>
</Helmet>


      <main className="min-h-screen">
        {/* ================= HERO ================= */}
        <header>
          <Demo />
        </header>

        {/* ================= ABOUT ================= */}
        <CompanyOverview />

        {/* ================= FEATURED PRODUCTS ================= */}
        <section
          className="py-20 bg-background"
          aria-labelledby="featured-products-heading"
        >
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2
                  id="featured-products-heading"
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  Featured <span className="text-gradient">Products</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Explore high-quality fire safety systems and industrial
                  equipment trusted by businesses across India.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <AnimatedSection key={product.id} delay={index * 0.1}>
                  <ProductCard product={product} />
                </AnimatedSection>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/products" aria-label="View all products">
                  View All Products <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ================= CLIENTS ================= */}
        <section
          className="py-20"
          aria-labelledby="clients-heading"
        >
          <h2
            id="clients-heading"
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our Previous <span className="text-gradient">Clients</span>
          </h2>

          <SpinningClientLogos />
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <TestimonialsSection />

        <Footer />
      </main>
    </>
  );
};

/* ===============================
   Animated Wrapper
================================ */
const AnimatedSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

/* ===============================
   Company Overview
================================ */
const CompanyOverview = () => {
  const stats = [
    { icon: Clock, label: "Years Experience", value: "7+" },
    { icon: Shield, label: "Projects Completed", value: "500+" },
    { icon: Award, label: "Industry Awards", value: "12+" },
    { icon: Wrench, label: "Products Available", value: "100+" },
  ];

  return (
    <section
      className="py-20 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1
              id="about-heading"
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Fire Safety & Industrial Solutions by{" "}
              <span className="text-gradient">AtoZ Enterprise</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AtoZ Enterprise delivers reliable fire protection systems and
              industrial equipment with over 7 years of proven industry
              expertise across India.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="p-6 text-center bg-card">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===============================
   Testimonials
================================ */
const TestimonialsSection = () => {
  return (
    <section
      className="py-20 bg-background"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </AnimatedSection>
      </div>

      <Testimonials />
    </section>
  );
};

export default Home;

import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight, Shield, Wrench, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import { products } from "@/data/products";
import Testimonials from "@/components/Testimonials";
import Demo from "../components/Demo";
import SpinningClientLogos from "@/components/LogoCloudCarouselDemo";
import Navbar1 from "@/components/ui/navbar-1";
import ProductCard from "@/components/ProductCard"; // ✅ Using reusable ProductCard

const Home = () => {
  const featuredProducts = products.slice(0, 6);
  const [currentLine, setCurrentLine] = useState(0);

  const rotatingLines = [
    "Smart Fire Systems",
    "Industrial Automation",
    "Reliable Equipment Solutions",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % rotatingLines.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [rotatingLines.length]);

  return (
    <div className="min-h-screen">
      

      <Demo />

      {/* Hero Section */}

      {/* Company Overview Section */}
      <CompanyOverview />

      {/* Featured Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Featured <span className="text-gradient">Products</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our range of high-quality industrial and fire safety
                equipment
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.1}>
                <ProductCard product={product} /> {/* ✅ Reused Component */}
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/products">
                View All Products <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      

              <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Previous <span className="text-gradient">Clients</span>
              </h2>
              
            </div>

      {/* Partner Logos Section */}
      <SpinningClientLogos />

      {/* Testimonials Section */}
      <TestimonialsSection />

      <Footer />
    </div>
  );
};

// Animated Section Component
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
    if (isInView) {
      controls.start("visible");
    }
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

// Company Overview Component
const CompanyOverview = () => {
  const stats = [
    { icon: Clock, label: "Years Experience", value: "7+" },
    { icon: Shield, label: "Projects Completed", value: "500+" },
    { icon: Award, label: "Industry Awards", value: "12+" },
    { icon: Wrench, label: "Products Available", value: "100+" },
  ];

  return (
    <section className="py-20 bg-white text-secondary-foreground">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              <span className="text-gradient">About AtoZ Enterprise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 7 years of experience, AtoZ Enterprise provides
              top-notch fire safety and industrial solutions. Our mission is to
              ensure safety, innovation, and reliability for every client we
              serve.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="p-6 text-center hover:scale-105 transition-transform duration-300 bg-card">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
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

// Testimonials Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Smith",
      company: "ABC Manufacturing",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      text: "AtoZ Enterprise provided exceptional fire safety systems for our facility. Their expertise and professionalism are unmatched.",
    },
    {
      name: "Sarah Johnson",
      company: "XYZ Logistics",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      text: "The loading dock equipment we purchased has significantly improved our operations. Highly recommend their products!",
    },
    {
      name: "Michael Chen",
      company: "Industrial Solutions Inc.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      text: "Outstanding quality and customer service. AtoZ Enterprise is our go-to supplier for all industrial equipment needs.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default Home;

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight, Shield, Wrench, Award, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import Testimonials from "@/components/Testimonials";
import Demo from "../components/Demo";
import SpinningClientLogos from "@/components/LogoCloudCarouselDemo";
import ProductCard from "@/components/ProductCard";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

/* ===============================
   Home Page (SEO Optimized)
================================ */
const Home = () => {
  useScrollToTop();
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      {/* ================= SEO META ================= */}
      <Helmet>
        {/* PRIMARY TITLE – ALL SEARCH VARIATIONS */}
        <title>
          AtoZ Enterprise | A To Z Enterprises Bhiwandi | Fire Safety & Industrial Equipment Supplier
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="AtoZ Enterprise (A To Z Enterprises) is a leading fire safety systems and industrial equipment supplier in Bhiwandi, Thane, Maharashtra. We supply fire extinguishers, fire alarm systems, hydrant systems and industrial safety solutions across Mumbai and Maharashtra."
        />

        {/* META KEYWORDS */}
        <meta
          name="keywords"
          content="AtoZ Enterprise, A To Z Enterprises, Atoz Enterprises, Atoz Enterprise Bhiwandi, Fire Safety Supplier Bhiwandi, Fire Extinguisher Dealer Bhiwandi, Fire Alarm System Bhiwandi, Fire Hydrant System Maharashtra, Industrial Safety Equipment Thane, Industrial Equipment Supplier Mumbai"
        />

        <link rel="canonical" href="https://atozenterprise.co.in/" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="AtoZ Enterprise | Fire Safety Supplier in Bhiwandi" />
        <meta
          property="og:description"
          content="Fire safety systems and industrial equipment supplier in Bhiwandi, Thane and Mumbai."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atozenterprise.co.in/" />
        <meta property="og:image" content="https://atozenterprise.co.in/og-image.jpg" />

        {/* LOCAL BUSINESS + ORGANIZATION SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "Organization"],
            name: "AtoZ Enterprise",
            alternateName: [
              "A To Z Enterprises",
              "Atoz Enterprises",
              "Atoz Enterprise Bhiwandi",
            ],
            url: "https://atozenterprise.co.in",
            image: "https://atozenterprise.co.in/og-image.jpg",
            telephone: "+91-82089-51520",
            email: "atozenterprisesgh@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Kalyan Road, Bhiwandi",
              addressLocality: "Bhiwandi",
              addressRegion: "Maharashtra",
              postalCode: "421302",
              addressCountry: "IN",
            },
            areaServed: [
              "Bhiwandi",
              "Thane",
              "Mumbai",
              "Maharashtra",
            ],
            openingHours: [
              "Mo-Fr 08:00-18:00",
              "Sa 09:00-14:00",
            ],
          })}
        </script>

        {/* FAQ SCHEMA – HUGE LOCAL SEO BOOST */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Where is AtoZ Enterprise located?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AtoZ Enterprise (A To Z Enterprises) is located on Kalyan Road, Bhiwandi, Thane, Maharashtra.",
                },
              },
              {
                "@type": "Question",
                name: "What products does AtoZ Enterprise supply?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We supply fire extinguishers, fire alarm systems, fire hydrant systems and industrial safety equipment.",
                },
              },
              {
                "@type": "Question",
                name: "Does AtoZ Enterprise serve Mumbai and Thane?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we serve Bhiwandi, Thane, Mumbai and all across Maharashtra.",
                },
              },
            ],
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">
              Fire Safety Products by AtoZ Enterprise Bhiwandi
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <AnimatedSection key={product.id} delay={index * 0.1}>
                  <ProductCard product={product} />
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

        {/* ================= CLIENTS ================= */}
        <section className="py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Trusted Clients Across Bhiwandi, Thane & Mumbai
          </h2>
          <SpinningClientLogos />
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <TestimonialsSection />

        {/* ================= ADDRESS / CONTACT ================= */}
        <HomeAddressSection />

        <Footer />
      </main>
    </>
  );
};

/* ===============================
   Animated Wrapper
================================ */
const AnimatedSection = ({ children, delay = 0 }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
        hidden: { opacity: 0, y: 40 },
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fire Safety & Industrial Equipment Supplier in Bhiwandi –{" "}
            <span className="text-gradient">AtoZ Enterprise</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AtoZ Enterprise (A To Z Enterprises) is a trusted fire safety systems
            and industrial equipment supplier based on Kalyan Road, Bhiwandi,
            Maharashtra serving Thane and Mumbai regions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===============================
   Address Section (NAP CONSISTENT)
================================ */
const HomeAddressSection = () => {
  return (
    <section className="py-20 bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-gradient">AtoZ Enterprise</span>
          </h2>

          <p className="text-gray-700 mb-4">
            <strong>AtoZ Enterprise (A To Z Enterprises)</strong><br />
            Kalyan Road, Bhiwandi,<br />
            Dist. Thane – 421302,<br />
            Maharashtra, India
          </p>

          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong>{" "}
            <a href="tel:+918208951520" className="text-primary">
              +91 82089 51520
            </a>
          </p>

          <p className="text-gray-700 mb-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:atozenterprisesgh@gmail.com" className="text-primary">
              atozenterprisesgh@gmail.com
            </a>
          </p>

          <p className="text-gray-700">
            <strong>Service Areas:</strong> Bhiwandi, Mumbai, Thane, Maharashtra
          </p>
        </div>

        <iframe
          title="AtoZ Enterprise Bhiwandi Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15031.382161363257!2d73.0546635673379!3d19.290022162960103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd001bccc25b%3A0xc498ec794f97471c!2sA%20TO%20Z%20Enterprises!5e0!3m2!1sen!2sin!4v1762427712433!5m2!1sen!2sin"
          className="w-full h-[300px] rounded-xl shadow-md"
          loading="lazy"
        />
      </div>
    </section>
  );
};

/* ===============================
   Testimonials
================================ */
const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What Our <span className="text-gradient">Clients Say</span>
        </h2>
      </div>
      <Testimonials />
    </section>
  );
};

export default Home;

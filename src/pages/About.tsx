import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import aboutBg from "/assets/about-bg.jpg";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { Helmet } from "react-helmet-async";

const About = () => {
  useScrollToTop();

  const milestones = [
    {
      year: "2018",
      title: "AtoZ Enterprise Founded",
      description:
        "Started our journey with a commitment to deliver world-class industrial equipment, fire safety systems, and infrastructure solutions.",
    },
    {
      year: "2019",
      title: "First Major Industrial Project",
      description:
        "Successfully completed large-scale dock leveler and floor joint installations for a leading automotive manufacturing plant.",
    },
    {
      year: "2021",
      title: "Expanded Product Portfolio",
      description:
        "Added armoured joints, dowel plates, wheel chocks, bollards, and warehouse safety systems to our offerings.",
    },
    {
      year: "2023",
      title: "Pan-India Operations",
      description:
        "Partnered with EPC contractors and industrial clients across India for nationwide project execution.",
    },
    {
      year: "2025",
      title: "Automation & Innovation",
      description:
        "Introduced advanced loading dock automation and material handling systems to enhance safety and efficiency.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To deliver reliable fire safety systems and industrial equipment that improve productivity, safety, and infrastructure quality.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To become India’s most trusted partner for fire safety, loading dock, and industrial infrastructure solutions.",
    },
    {
      icon: Award,
      title: "Quality Commitment",
      description:
        "We follow strict quality standards, precision engineering, and durable materials for long-lasting performance.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "We build long-term partnerships through customized solutions, timely execution, and strong post-installation support.",
    },
  ];

  return (
    <>
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>About AtoZ Enterprise | Fire Safety & Industrial Solutions</title>

        <meta
          name="description"
          content="Learn about AtoZ Enterprise, a trusted fire safety and industrial equipment supplier in India since 2018, delivering reliable loading dock and infrastructure solutions."
        />

        <meta
          name="keywords"
          content="AtoZ Enterprise, fire safety company India, industrial equipment supplier, loading dock solutions, dock levelers, warehouse safety systems"
        />

        <link
          rel="canonical"
          href="https://atozenterprise.co.in/about"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About AtoZ Enterprise | Industrial & Fire Safety Experts"
        />
        <meta
          property="og:description"
          content="Engineering reliable fire safety systems and industrial infrastructure solutions across India since 2018."
        />
        <meta
          property="og:url"
          content="https://atozenterprise.co.in/about"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:image"
          content="https://atozenterprise.co.in/og-image.jpg"
        />

        {/* About Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AtoZ Enterprise",
            url: "https://atozenterprise.co.in",
            description:
              "Fire safety and industrial equipment supplier specializing in loading dock systems, warehouse safety, and industrial infrastructure.",
            foundingDate: "2018",
            areaServed: "India",
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        {/* ================= HERO ================= */}
        <header className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutBg})` }}
            role="img"
            aria-label="Industrial fire safety and infrastructure solutions by AtoZ Enterprise"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 relative z-10 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-background">
              About <span className="text-gradient">AtoZ Enterprise</span>
            </h1>
            <p className="text-xl md:text-2xl text-background/90 max-w-3xl mx-auto">
              Delivering fire safety systems, industrial equipment, and loading
              dock solutions with engineering excellence since 2018.
            </p>
          </motion.div>
        </header>

        {/* ================= STORY ================= */}
        <section className="py-20 bg-background" aria-labelledby="story-heading">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 id="story-heading" className="text-4xl font-bold mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded in 2018, AtoZ Enterprise began with a vision to deliver
                dependable fire safety systems and industrial equipment for
                warehouses, factories, and logistics facilities across India.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we are a trusted partner for dock levelers, armoured
                joints, dowel plates, bollards, and warehouse safety solutions —
                driven by quality engineering and customer satisfaction.
              </p>
            </motion.div>

            {/* ================= TIMELINE ================= */}
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <Card className="w-5/12 p-6">
                    <div className="text-primary font-bold text-2xl mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </Card>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= VALUES ================= */}
        <section
          className="py-20 bg-muted"
          aria-labelledby="values-heading"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 id="values-heading" className="text-4xl font-bold mb-4">
                Our <span className="text-gradient">Core Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The foundation of our success — quality, safety, innovation, and
                customer trust.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full">
                    <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg inline-block mb-4">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default About;

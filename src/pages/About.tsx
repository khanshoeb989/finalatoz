import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutBg from "/assets/about-bg.jpg";

const About = () => {
  const milestones = [
    { year: "2018", title: "AtoZ Enterprise Founded", description: "Started our journey with a commitment to deliver world-class industrial equipment and infrastructure solutions." },
    { year: "2019", title: "First Major Project", description: "Completed large-scale dock leveler and floor joint installation for a leading automotive manufacturing plant." },
    { year: "2021", title: "Diversified Product Line", description: "Expanded our product portfolio to include armoured joints, dowel plates, wheel chocks, and safety barriers." },
    { year: "2023", title: "Nationwide Presence", description: "Partnered with top industrial contractors and EPC companies across India for consistent project execution." },
    { year: "2025", title: "Innovation & Automation", description: "Introduced advanced material handling and loading dock automation systems to boost operational efficiency." }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide reliable and efficient industrial equipment that enhances productivity, safety, and infrastructure quality across industries."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be India’s most trusted partner in industrial and loading dock solutions through quality engineering, innovation, and customer satisfaction."
    },
    {
      icon: Award,
      title: "Quality",
      description: "We are committed to precision engineering, durable materials, and strict quality control to ensure long-lasting performance and safety."
    },
    {
      icon: Users,
      title: "Customer Commitment",
      description: "We believe in long-term partnerships — offering personalized solutions, timely delivery, and dedicated post-installation support."
    }
  ];

  return (
    <div className="min-h-screen">
      

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBg})` }}
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
            Engineering strength, precision, and reliability in every industrial solution since 2018.
          </p>
        </motion.div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Established in 2018, AtoZ Enterprise began with a simple idea — to deliver dependable and high-performance industrial equipment for warehouses, factories, and logistics facilities. We started with a small but passionate team focused on quality and trust.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over the years, we’ve evolved into a trusted name in industrial infrastructure, specializing in dock levelers, armoured joints, dowel plates, bollards, and warehouse safety systems. Our dedication to engineering excellence, customer satisfaction, and continuous improvement drives us to set new standards in industrial safety and efficiency.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <Card className={`w-5/12 p-6 ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}>
                  <div className="text-primary font-bold text-2xl mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </Card>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The foundation of our growth — quality, innovation, trust, and excellence.
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
                <Card className="p-8 h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg inline-block mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

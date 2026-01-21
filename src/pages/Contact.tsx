import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const Contact = () => {
  useScrollToTop();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "918208951520";

    const message = `📩 *New Contact Request from AtoZ Enterprise*%0A%0A
👤 *Name:* ${formData.name}%0A
📧 *Email:* ${formData.email}%0A
📞 *Phone:* ${formData.phone || "Not provided"}%0A
💬 *Message:* ${formData.message}%0A%0A
🌐 Sent from: atozenterprise.co.in`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Please confirm and send your message.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 82089 51520",
      link: "tel:+918208951520",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "atozenterprisesgh@gmail.com",
      link: "mailto:atozenterprisesgh@gmail.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content:
        "Kalyan Road, Bhiwandi, Dist. Thane, Maharashtra 421302, India",
      link: "#map",
    },
  ];

  return (
    <>
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>
          Contact AtoZ Enterprise | Fire Safety & Industrial Equipment Supplier
        </title>

        <meta
          name="description"
          content="Contact AtoZ Enterprise for fire safety systems, industrial equipment, and loading dock solutions. Serving clients across India from Bhiwandi, Maharashtra."
        />

        <meta
          name="keywords"
          content="contact AtoZ Enterprise, fire safety supplier India, industrial equipment contact, loading dock solutions Bhiwandi, warehouse safety systems"
        />

        <link
          rel="canonical"
          href="https://atozenterprise.co.in/contact"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact AtoZ Enterprise | Industrial & Fire Safety Experts"
        />
        <meta
          property="og:description"
          content="Get in touch with AtoZ Enterprise for reliable fire safety systems and industrial equipment across India."
        />
        <meta
          property="og:url"
          content="https://atozenterprise.co.in/contact"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://atozenterprise.co.in/og-image.jpg"
        />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "AtoZ Enterprise",
            url: "https://atozenterprise.co.in",
            telephone: "+91-82089-51520",
            email: "atozenterprisesgh@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Kalyan Road, Bhiwandi",
              addressLocality: "Thane",
              addressRegion: "MH",
              postalCode: "421302",
              addressCountry: "IN",
            },
            areaServed: "India",
            openingHours: [
              "Mo-Fr 08:00-18:00",
              "Sa 09:00-14:00",
            ],
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        {/* ================= HERO ================= */}
        <section
          className="pt-32 pb-20 bg-gradient-to-b from-muted to-background"
          aria-labelledby="contact-heading"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1
                id="contact-heading"
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                Contact <span className="text-gradient">AtoZ Enterprise</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Reach out for fire safety systems, industrial equipment, and
                loading dock solutions tailored to your business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* ================= FORM ================= */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    Send Us a Message
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    aria-label="Contact form"
                  >
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us about your industrial or fire safety requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                    >
                      Send Message <Send className="ml-2" />
                    </Button>
                  </form>
                </Card>
              </motion.div>

              {/* ================= INFO ================= */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-start space-x-4"
                      >
                        <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg">
                          <info.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {info.content}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </Card>

                {/* ================= MAP ================= */}
                <Card id="map" className="overflow-hidden">
                  <div className="h-64 md:h-80 w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15031.382161363257!2d73.0546635673379!3d19.290022162960103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd001bccc25b%3A0xc498ec794f97471c!2sA%20TO%20Z%20Enterprises!5e0!3m2!1sen!2sin!4v1762427712433!5m2!1sen!2sin"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full border-0"
                      title="AtoZ Enterprise Location"
                    />
                  </div>
                </Card>

                {/* ================= HOURS ================= */}
                <Card className="p-8">
                  <h3 className="font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Monday - Friday
                      </span>
                      <span className="font-medium">
                        8:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Saturday
                      </span>
                      <span className="font-medium">
                        9:00 AM - 2:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Sunday
                      </span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Contact;

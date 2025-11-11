import React from "react";
import { LogoCloudCarousel } from "@/components/ui/logo-cloud-carousel";

const LogoCloudCarouselDemo = () => {
  return (
    <div className="w-full">
      <section className="border-t border-b border-border/30">
        <LogoCloudCarousel logos={logos} />
      </section>
    </div>
  );
};

export default LogoCloudCarouselDemo;

// Replace with your local logo images
const logos = [
  {
    name: "Shapoorji Pallonji",
    url: "/assets/1.png",
    darkUrl: "/assets/1.png",
    description: "Shapoorji Pallonji Group",
  },
  {
    name: "TATA",
    url: "/assets/2.webp",
    darkUrl: "/assets/2.webp",
    description: "TATA Group",
  },
  {
    name: "Larsen & Toubro",
    url: "/assets/3.png",
    darkUrl: "/assets/3.png",
    description: "Larsen & Toubro Limited",
  },
  {
    name: "Indian Railways",
    url: "/assets/4.webp",
    darkUrl: "/assets/4.webp",
    description: "Indian Railways",
  },
  
  {
    name: "Biswasraj Flooring",
    url: "/assets/6.webp",
    darkUrl: "/assets/6.webp",
    description: "Biswasraj Flooring",
  },
  {
    name: "Reliance Industries",
    url: "/assets/7.png",
    darkUrl: "/assets/7.png",
    description: "Reliance Industries Limited",
  },
  {
    name: "Godrej & Boyce",
    url: "/assets/8.png",
    darkUrl: "/assets/8.png",
    description: "Godrej & Boyce Manufacturing Co. Ltd.",
  },
  {
    name: "JSW Group",
    url: "/assets/9.png",
    darkUrl: "/assets/9.png",
    description: "JSW Group",
  },
  {
    name: "Mahindra Group",
    url: "/assets/10.png",
    darkUrl: "/assets/10.png",
    description: "Mahindra Group",
  },
  {
    name: "Bharat Petroleum",
    url: "/assets/11.png",
    darkUrl: "/assets/11.png",
    description: "Bharat Petroleum Corporation Limited",
  },
  {
    name: "ONGC",
    url: "/assets/12.png",
    darkUrl: "/assets/12.png",
    description: "Oil and Natural Gas Corporation",
  },
];

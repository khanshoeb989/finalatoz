import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "AtoZ Enterprise helped us upgrade our entire fire safety system with efficiency and precision. Their equipment is top-notch and reliable.",
    image: "https://imgs.search.brave.com/7uIL0hw7XMYn8_7lP6cDq4C9zDrQ8CZ5S842hPdiSkU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC1qb2xs/eS1pbmRpYW4tbWFu/LXNtaWxpbmctcG9z/aW5nLXdpdGgtYXJt/cy1jcm9zc2VkXzQ4/MjI1Ny0xMjIxOTEu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MCZxPTgw",
    name: "Rajesh Sharma",
    role: "Factory Safety Head, Mahavir Textiles",
  },
  {
    text: "Their fire extinguishers and emergency alarms have significantly improved our workplace safety. Quick delivery and professional service!",
    image: "https://imgs.search.brave.com/lU3qsF115eKFrQ3Z0KPot3wYq9X2vdhURsKLHe7WzY4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/NTA0NDc5OS9waG90/by9wb3J0cmFpdC1v/Zi1hLWJlYXV0aWZ1/bC1tYXR1cmUtaW5k/aWFuLXdvbWFuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1x/bC1TZHJsSGFlMGJE/NmlKdzJGS25yenhV/djdoZEhBYUxsZ01m/Wkp0c09VPQ",
    name: "Anita Verma",
    role: "Operations Manager, TechnoWeld Industries",
  },
  {
    text: "We installed their industrial safety equipment last year, and it has been working flawlessly. Great support and maintenance response.",
    image: "https://imgs.search.brave.com/zPvZlbATqqN6x_yxBefcFFRJAm32ks0PC_iCTy8VEEQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvYjFlZWF6RTZD/RTgvaHFkZWZhdWx0/LmpwZw",
    name: "Mohammad Irfan",
    role: "Maintenance Supervisor, Prime Steel Works",
  },
  {
    text: "The team from AtoZ Enterprise was highly professional. Their installation of fire detection systems was smooth and completed on time.",
    image: "https://imgs.search.brave.com/cnlrsM8VRPrk2n_TI14zE5s1O7wI3f1xxTA_azrY3Cc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC1zbWls/aW5nLWluZGlhbi1w/ZXJzb24tcG9zaW5n/LWZyb250LWNhbWVy/YV80ODIyNTctMTIy/MzI0LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA",
    name: "Priya Nair",
    role: "Facility Manager, Zenith Pharmaceuticals",
  },
  {
    text: "We’ve worked with several vendors before, but AtoZ stands out for their prompt after-sales support and durable product quality.",
    image: "https://imgs.search.brave.com/rb1-lxGEdiChd4taU7-ItNbVMJnOP98jxv9YULVc8Tg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTEy/OTIyODA0L3Bob3Rv/L2ZhY2Utb2YtaW5k/aWFuLW1hbi13ZWFy/aW5nLXRyYWRpdGlv/bmFsLWNsb3RoaW5n/LWFnYWluc3Qtd2hp/dGUtYmFja2dyb3Vu/ZC53ZWJwP2E9MSZi/PTEmcz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/MjNyQ2ZUUzJEMXMx/WjZZTy1oNnotM2Ru/N0d6dUdsbkZUQUZX/WkRfUVl2dz0",
    name: "Vikram Patel",
    role: "Plant Manager, Excel Engineering Pvt. Ltd.",
  },
  {
    text: "Their fire safety training and installation service were excellent. Our team feels more confident and secure now.",
    image: "https://imgs.search.brave.com/S4z1H-_iEoTHf7cBmR4tm6GyyyV874YPfSr94g-r48c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/Njc2OTU5MC9waG90/by9wb3J0cmFpdC1v/Zi1pbmRpYW4teW91/bmctYnVzaW5lc3N3/b21hbi1zdGFuZGlu/Zy1pbi1mcm9udC1v/Zi13aGl0ZS1iYWNr/Z3JvdW5kLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1pdVZy/NmxKRHNUZFJRV3JF/emV0ME9ZZUVEUUQw/anlrOWs2MkVDMy1o/YUUwPQ",
    name: "Rashmi Gupta",
    role: "HR Head, SecureTech Logistics",
  },
  {
    text: "We chose AtoZ Enterprise for our warehouse safety equipment, and it was one of the best decisions. Highly recommended for industries!",
    image: "https://imgs.search.brave.com/sIheeOO2NZ-owBuScuJ7WKOn0YcSk42SXxPg7UM6dZ0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzE3Lzg1Lzc4/LzM2MF9GXzEyMTc4/NTc4MTlfdlVZc2lT/UndnTFp0S2ZZVEpC/VGQzR1oxbXBwZFlK/alcuanBn",
    name: "Aman Khan",
    role: "Operations Director, Metro Logistics",
  },
  {
    text: "Their expertise in industrial fire safety is unmatched. The installation process was seamless and extremely well-coordinated.",
    image: "https://imgs.search.brave.com/YIzFJGmD0gEySF28kenAdgQ5GwIrtXk_Vms5zZdOy8M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9jaGVlcmZ1/bC1iZWF1dGlmdWwt/aW5kaWFuLWdpcmwt/c3R1ZGVudC0yNjBu/dy0xNjA2MTIwNTg4/LmpwZw",
    name: "Sneha Mehta",
    role: "Facility Head, Alpha Automotive",
  },
  {
    text: "From consultation to setup, everything was handled professionally. The equipment quality and service both exceeded expectations.",
    image: "https://imgs.search.brave.com/m2HHWAvK3udcufV5g97HFXYDo0I4TavF5-tlhh86HFY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvOTM4/NjM5L3BleGVscy1w/aG90by05Mzg2Mzku/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw",
    name: "Rohit Desai",
    role: "Admin Manager, Orion Industries",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

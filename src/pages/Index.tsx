import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import AdvancedTradingFeatures from "@/components/features/AdvancedTradingFeatures";
import { PricingSection } from "@/components/pricing/PricingSection";
import LogoCarousel from "@/components/LogoCarousel";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import Footer from "@/components/Footer";
import { Hero } from "@/components/ui/hero";
import Spline from '@splinetool/react-spline';

const testimonials = [
  {
    author: {
      name: "Jashith Arora",
      handle: "@jashitharora",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQF2U05wUMIAwg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719850421394?e=1752105600&v=beta&t=4iCokZs0zyRyHW_j8NoDpgBAZF0f6YaHxW6rrXzTRT8"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/jashith-arora"
  },
  {
    author: {
      name: "Shelly Garg",
      handle: "@shellygarg",
      avatar: "https://media.licdn.com/dms/image/v2/D4E03AQF9FkAog6BZVQ/profile-displayphoto-shrink_800_800/B4EZWoxDBVHUAc-/0/1742293185450?e=1752105600&v=beta&t=8BoJ5-CSUe4EgM-L1wa4Hcwq4kEqduJZcAfAtGMp1dQ"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://www.linkedin.com/in/shelly-garg/"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        {/* Background */}
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />
        
        <div className="relative z-10 flex items-center">
          {/* Left Side - Hero Component */}
          <div className="flex-1">
            <Hero />
          </div>
          
          {/* Right Side - 3D Model */}
          <div className="flex-1 h-[80vh]">
            <div className="w-full h-full relative">
              <Spline scene="https://prod.spline.design/hYFWGgwEZAsB1Cxg/scene.splinecode" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Features Section */}
      <div id="features" className="bg-black">
        <AdvancedTradingFeatures />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-black">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection
          title="Trusted by developers worldwide"
          description="Join thousands of developers who are already building the future with our AI platform"
          testimonials={testimonials}
        />
      </div>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default Index;

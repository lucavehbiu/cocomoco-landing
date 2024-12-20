'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { ChevronRight, ShoppingBag, Leaf, Award, Package } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function CocoMocoLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'product', 'details', 'nutrition'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const bounds = element.getBoundingClientRect();
          return bounds.top <= 100 && bounds.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-100">
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dates%20Fruit%20Icon-Jk2NgKaP6WD6HNlucHKGQUXEVvIGzT.png" alt="CocoMoco Logo" width={160} height={40} />
          </motion.div>
          
          <nav className="flex items-center space-x-8">
            {['Product', 'Details', 'Nutrition'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative text-lg font-medium transition-colors ${
                  activeSection === item.toLowerCase() 
                    ? 'text-purple-800' 
                    : 'text-purple-600 hover:text-purple-800'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"
                    layoutId="underline"
                  />
                )}
              </motion.a>
            ))}
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
              onClick={() => window.location.href = '#shop'}
            >
              <ShoppingBag size={16} />
              Shop Now
            </Button>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        <section id="hero" className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-purple-900 mb-6">
                <span className="block">Sour Cola</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  True Date
                </span>
              </h1>
              <p className="text-xl text-purple-700 mb-8 leading-relaxed">
                Experience a burst of nostalgia with our guilt-free, tangy indulgence. 
                Natural sweetness meets classic cola flavor in every bite.
              </p>
              <div className="flex gap-4">
                <Button 
                  className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 flex items-center gap-2"
                  onClick={() => window.location.href = '#shop'}
                >
                  Shop Now
                  <ChevronRight size={20} />
                </Button>
                <Button 
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <Image 
                  src="https://storage.googleapis.com/oda-images/assets/Dates%20Fruit%20Photo.jpg" 
                  alt="Sour Cola True Date" 
                  width={500} 
                  height={500}
                  className="rounded-3xl shadow-2xl object-cover"
                  priority
                />
                <motion.div 
                  className="absolute -top-4 -right-4 bg-purple-100 rounded-full p-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Leaf size={32} className="text-purple-600" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-pink-100 rounded-full p-4"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Award size={32} className="text-pink-600" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="product" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-4xl font-bold text-center text-purple-900 mb-16">
                A Perfect Blend of Health & Nostalgia
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Package className="w-12 h-12 text-purple-600 mb-4" />,
                  title: "Bold Cola Kick",
                  description: "Infused with the tangy flavor of cola, bringing back the joy of fizzy delights without the guilt."
                },
                {
                  icon: <Leaf className="w-12 h-12 text-purple-600 mb-4" />,
                  title: "94% Pure Dates",
                  description: "Made with premium dates, offering a healthier alternative to traditional candy while maintaining the sweet satisfaction."
                },
                {
                  icon: <Award className="w-12 h-12 text-purple-600 mb-4" />,
                  title: "Perfect Portions",
                  description: "Available in 12 convenient bags, ideal for on-the-go snacking or sharing with friends and family."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="h-full bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      {feature.icon}
                      <h3 className="text-2xl font-semibold text-purple-800 mb-4">{feature.title}</h3>
                      <p className="text-purple-700 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="details" className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-2xl shadow-xl p-12 max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-purple-900 mb-8 text-center">Premium Ingredients</h2>
              <div className="space-y-8">
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <h3 className="text-2xl font-semibold text-purple-900 mb-4">Ingredients</h3>
                  <p className="text-purple-800 leading-relaxed">
                    Dates (non-EU) (94%), chicory root fiber, acid (malic), 
                    vegetable fat (coconut), natural flavouring
                  </p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <h3 className="text-2xl font-semibold text-purple-900 mb-4">Storage Instructions</h3>
                  <ul className="space-y-2 text-purple-800">
                    <li>• Store in a dry and cool place</li>
                    <li>• Best consumed within 14 days of opening</li>
                    <li>• May contain traces of peanuts and almonds</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="nutrition" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-4xl font-bold text-center text-purple-900 mb-16">
                Nutritional Information
              </h2>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-12 max-w-3xl mx-auto">
                <h3 className="text-2xl font-semibold text-purple-900 mb-8">Per 100g Serving</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { label: "Energy", value: "1355 kJ / 320 kcal" },
                    { label: "Fat", value: "0.9g (saturates: 0.7g)" },
                    { label: "Carbohydrates", value: "69g (sugars: 67g)" },
                    { label: "Fiber", value: "12g" },
                    { label: "Protein", value: "2.2g" },
                    { label: "Salt", value: "0.02g" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-4 bg-white bg-opacity-50 rounded-xl"
                    >
                      <div className="text-purple-600 text-lg mb-1">{item.label}</div>
                      <div className="text-purple-900 font-semibold text-xl">{item.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dates%20Fruit%20Icon-Jk2NgKaP6WD6HNlucHKGQUXEVvIGzT.png" alt="CocoMoco Logo" width={160} height={40} className="mb-4" />
              <p className="text-purple-200">
                Indulge in the perfect blend of health and nostalgia.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#product" className="text-purple-200 hover:text-white transition-colors">Products</a></li>
                <li><a href="#details" className="text-purple-200 hover:text-white transition-colors">Details</a></li>
                <li><a href="#nutrition" className="text-purple-200 hover:text-white transition-colors">Nutrition</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact</h4>
              <p className="text-purple-200">
                Questions? Reach out to us at:<br />
                support@cocomoco.com
              </p>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-12 pt-8 text-center text-purple-200">
            <p>&copy; 2024 CocoMoco. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


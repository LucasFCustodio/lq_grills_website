import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, Trophy, Users, Clock, DollarSign, ChefHat } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import TestimonialCard from '../components/TestimonialCard';
import ServiceCard from '../components/ServiceCard';
import tomahawkImage from '../images/tomahawk-steak-bbq-catering.jpg';
import hamburgerImage from '../assets/hamburger-patties-being-grilled-on-charcoal-kettle-2025-04-01-01-30-38-utc-min.jpg';

const HomePage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-pattern bg-fixed bg-cover bg-center min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Boios BBQ - Premium BBQ Catering For Your Special Events
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experience the finest Brazilian and American barbecue served fresh at your location. Our passion for flavor and quality makes your event unforgettable.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/services" className="btn btn-primary">
                View Our Packages
              </Link>
              <a href="#contact" className="btn btn-accent">
                Request a Quote
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-display font-bold text-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Why Choose Boios BBQ?
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-md"
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <ChefHat size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Grill Masters</h3>
              <p className="text-gray-600">Chef Lucas brings years of experience and passion to every event, ensuring authentic flavors and perfect cooking.</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-md"
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Trophy size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Chef Lucas understands that there's much more to grilling than just throwing a steak onto the grill. You're guaranteed to have an exceptional culinary experience.</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-md"
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Personal Experience</h3>
              <p className="text-gray-600">We're not some huge company, so you can rest assured we'll deliver a personal and pleasant experience.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src={tomahawkImage}
                  alt="tomahawk-bbq-catering" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="text-2xl font-bold">Driven by</p>
                  <p className="text-2xl font-bold">Precision & Passion</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-secondary mb-6">About Boios BBQ Catering</h2>
              <div className="border-l-4 border-primary pl-4 mb-6">
                <p className="text-xl text-gray-700 italic">Mastering the art of the perfect steak — for events that leave a lasting flavor.</p>
              </div>
              <p className="text-gray-700 mb-4">
              At Boios BBQ, we specialize in delivering a rich, flavorful barbecue experience rooted in skill and precision — not just tradition. Our passion lies in perfecting every cut, from the sear of a beautiful crust to the exact temperature and tenderness of each steak.
              </p>
              <p className="text-gray-700 mb-6">
              Our bbq catering brings together the bold flavors of Brazilian BBQ, the hearty spirit of American barbecue, and premium cuts like Porterhouse, Tomahawk, Rump, and Flank steak. Every event is a chance to showcase our dedication to seasoning, doneness, and quality that your guests will remember.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="text-primary mr-2" size={20} />
                  <span>Prompt Service</span>
                </div>
                <div className="flex items-center">
                  <Flame className="text-primary mr-2" size={20} />
                  <span>Authentic Flavors</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="text-primary mr-2" size={20} />
                  <span>Competitive Pricing</span>
                </div>
                <div className="flex items-center">
                  <Users className="text-primary mr-2" size={20} />
                  <span>Events of All Sizes</span>
                </div>
              </div>
              
              <Link to="/services" className="btn btn-primary inline-flex items-center">
                Explore Our Services <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-secondary mb-4">Our Popular BBQ Catering Packages</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We offer a variety of BBQ catering packages to suit your event needs. From authentic Brazilian churrasco to classic American barbecue, our options are designed to delight your guests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="Brazilian BBQ"
              description="Experience authentic churrasco with our premium Brazilian BBQ package featuring Picanha steak, Linguiça sausage, and traditional sides."
              image="https://img.freepik.com/fotos-gratis/bife-suculento-medio-raro-com-especiarias-e-legumes-grelhados_2829-18672.jpg?t=st=1746557279~exp=1746560879~hmac=b19d3d64665628fa4df8f25ef93bec7ec801c24bc35d3d1d81cd18957c08be53&w=996"
              price="Starting at $25 per person"
              link="/services"
              delay={0.1}
            />
            
            <ServiceCard
              title="American BBQ"
              description="Classic American barbecue with premium burgers, hot dogs, and all the fixings. Perfect for casual gatherings and family events."
              image={hamburgerImage}
              price="Starting at $20 per person"
              link="/services#americanBBQ"
              delay={0.2}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-secondary inline-flex items-center">
              View All Packages <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-secondary bg-texture bg-blend-soft-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-200 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our happy customers have to say about our BBQ catering services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              event="Wedding Reception"
              quote="The Brazilian BBQ package was the highlight of our wedding reception! The Picanha steak was perfectly cooked, and all our guests were impressed."
              rating={5}
              delay={0.1}
            />
            
            <TestimonialCard
              name="Michael Rodriguez"
              event="Corporate Event"
              quote="Boios BBQ catered our company picnic, and the food was exceptional. The staff was professional, and the setup was impressive. Will definitely hire again!"
              rating={5}
              delay={0.2}
            />
            
            <TestimonialCard
              name="Jennifer Williams"
              event="Birthday Party"
              quote="We chose the American BBQ package for my husband's 40th birthday. The burgers and hot dogs were a hit! Amazing service and attention to detail."
              rating={4}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* 
      Gallery Section 
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-secondary mb-4">Our BBQ Gallery</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Take a look at some of our mouthwatering creations and happy events we've catered.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.pexels.com/photos/1105325/bbq-meet-eating-diner-1105325.jpeg",
              "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg",
              "https://images.pexels.com/photos/8522754/pexels-photo-8522754.jpeg",
              "https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg",
              "https://images.pexels.com/photos/8522778/pexels-photo-8522778.jpeg",
              "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg",
              "https://images.pexels.com/photos/8522557/pexels-photo-8522557.jpeg",
              "https://images.pexels.com/photos/8523403/pexels-photo-8523403.jpeg"
            ].map((image, index) => (
              <motion.div 
                key={index}
                className="overflow-hidden rounded-lg h-48 md:h-64"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={image} 
                  alt={`BBQ catering gallery image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-secondary mb-4">Get in Touch</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Ready to elevate your event with our BBQ catering services? Fill out the form below, and we'll get back to you with a customized quote.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
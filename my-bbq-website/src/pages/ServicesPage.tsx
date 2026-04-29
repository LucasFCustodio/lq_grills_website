import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Clock, Users, Info, Plus } from 'lucide-react';
import picanhaSteak from '../images/picanha-steak-bbq-catering-prices.jpg';
import tomahawkSteak from '../images/tomahawk-steak-bbq-catering.jpg';
import chickenHearts from '../images/chicken-hearts-bbq-catering-prices.jpg';
import rumpSteak from '../images/rump-steak-bbq-catering-prices.jpg';
import garlicBread from '../images/garlic-bread-bbq-catering-prices.jpg';
import porterHouse from '../images/porterhouse-steak-boios-bbq-catering-prices.jpg';
import flankSteak from '../images/flank-steak-boios-bbq-catering-prices.jpg'

const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary bg-texture bg-blend-soft-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our BBQ Catering Packages
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore our carefully crafted BBQ packages designed to make your event unforgettable. From authentic Brazilian churrasco to classic American barbecue.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Brazilian BBQ Package */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={picanhaSteak}
                alt="Brazilian BBQ" 
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="bg-accent text-white text-sm font-bold px-4 py-1 rounded-full w-fit mb-4">Chef's Specialty</div>
              <h2 className="text-3xl font-display font-bold text-secondary mb-4">Brazilian BBQ Catering Package</h2>
              <p className="text-xl text-primary font-bold mb-4">Starting at $130 for 4 people</p>
              <p className="text-gray-700 mb-1">
                Experience the authentic flavors of Brazil with our traditional churrasco-style barbecue. This base package includes ON-SITE GRILLING, priced at a flat rate of $130 for up to 4 people.
                Each additional guest is $12 dollars more (8 people would be $48 + $130 = $178).
              </p>
              <h3>Pricing Details</h3>
              <p>For the best experience, we recommend the following approach:</p>
              <ul>
                <li>Pay us for the steaks upfront</li>
                <li>We go to the local Brazilian market and get the steaks, ensuring best quality and authenticity</li>
                <li>You pay us for the service in the end</li>
                <li>Alternatively, you can buy the steaks yourself, and we will handle the grilling for you.</li>
                <li><b>Each additional guest: +$12</b></li>
              </ul>

              <h3>We include the following items, free of charge:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                  <span><span className="font-semibold">Rice</span> - Homemade by me</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                  <span><span className="font-semibold">Farofa</span> - Traditional toasted cassava flour mixture</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                  <span><span className="font-semibold">Garlic Bread</span> - Cheesy Brazilian garlic bread</span>
                </li>
              </ul>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">What's in the Brazilian BBQ:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Picanha Steak</span> - + $15, pairs well with the Picanha and Linguiça. A refreshing combination (literaly)</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Linguiça Sausage</span> - Traditional Brazilian pork sausage, with the choice for spicy Brazilian pork sausage instead (grill time - medium)</span>
                  </li>
                </ul>
                <h3 className="text-xl font-bold mb-3">Recommended Add-Ons</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Vinaigrette (Homemade)</span> - The king of Brazilian cuts, seasoned with rock salt and grilled to perfection (grill time - fast)</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <Clock className="text-primary mr-2" size={20} />
                  <span>Grill until everything is done</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <Users className="text-primary mr-2" size={20} />
                  <span>1-100 guests</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4" id="americanBBQ">
                <a href="/#contact" className="btn btn-primary">
                  Request a Quote
                </a>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* American BBQ Package */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center order-2 lg:order-1"
            >
              <h2 className="text-3xl font-display font-bold text-secondary mb-4">Steak Aficionado Package</h2>
              <p className="text-xl text-primary font-bold mb-4">Starting at $130 for 4 people</p>
              <p className="text-gray-700 mb-1">
                The perfect package for those who love to get fancy with their steak. Enjoy premium steaks, perfectly seasoned, and perfectly grilled!
              </p>
              <h3>Pricing Details</h3>
              <p>For the best experience, we recommend the following approach:</p>
              <ul>
                <li>Pay us for the steaks upfront</li>
                <li>We go to the supermarket and get the Porterhouse Steak and Flank Steak, ensuring best quality and authenticity</li>
                <li>You pay us for the service in the end</li>
                <li>Alternatively, you can buy the burgers yourself, and we will handle the grilling for you.</li>
                <li><b>Each additional guest: +$12</b></li>
              </ul>

              <h3>We include the following items, free of charge:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                  <span><span className="font-semibold">Rice</span> - Homemade by me</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                  <span><span className="font-semibold">Garlic Bread</span> - Cheesy Brazilian garlic bread</span>
                </li>
              </ul>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">What's in the Steak Aficionado Package:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Porterhouse Steak</span> - Similar to the T-Bone, it has 2 sides: Filet Mignion, and New York Strip</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Flank Steak</span> - A bigger piece of steak, offers a thin side and a thick side, incredibly juicy</span>
                  </li>
                </ul>
                <h3 className="text-xl font-bold mb-3">Recommended Add-Ons</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Cowboy Butter (Homemade)</span> - Elavate the taste of your steak by adding a hint of spiciness, zestiness, and delicious butter creaminess</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <Clock className="text-primary mr-2" size={20} />
                  <span>Geill until everything is done</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <Users className="text-primary mr-2" size={20} />
                  <span>1-100 guests</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#contact" className="btn btn-primary">
                  Request a Quote
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img 
                src={porterHouse} 
                alt="Porterhouse Steak" 
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </motion.div>
          </div>

          {/* Premium Add-ons Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-secondary mb-4">Premium Add-ons</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Enhance your BBQ experience with our selection of premium cuts and specialty items. These add-ons are included in the price.
                </p>
              </div>
          
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Tomahawk Steak",
                    description: "40oz of prime ribeye with the full bone attached, perfect for sharing and presentation",
                    price: "$54.99 per steak",
                    image: tomahawkSteak
                  },
                  {
                    name: "Chicken Hearts",
                    description: "Traditional Brazilian delicacy, perfectly seasoned and grilled",
                    price: "$10.99 per pound",
                    image: chickenHearts
                  },
                  {
                    name: "Rump Steak",
                    description: "Lean and flavorful cut, ideal for serving a crowd",
                    price: "$49.99 per steak per pound",
                    image: rumpSteak
                  },
                  {
                    name: "Porterhouse Steak",
                    description: "A thick, juicy cut that combines the tender filet mignon and the flavorful strip steak in one massive cut.",
                    price: "$54.99 per steak",
                    image: porterHouse
                  },
                  {
                    name: "Flank Steak",
                    description: "Lean, rich, and full of beefy flavor, grilled to perfection and sliced thin across the grain for tenderness.",
                    price: "$54.99 per steak",
                    image: flankSteak
                  },
                  {
                    name: "Garlic Bread",
                    description: "Want some extra garlic spiciness. Add garlic bread to your meal",
                    price: "$10.99 per pound",
                    image: garlicBread
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-xl overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div 
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <Plus size={40} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-secondary mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold">{item.price}</span>
                        <a href="/#contact"><button className="btn btn-primary btn-sm">
                          Add to Package
                        </button></a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-amber-50 p-8 rounded-lg shadow-md">
                <div className="flex items-start">
                  <Info size={24} className="text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Important Note</h3>
                    <p className="text-gray-700">
                      Premium add-ons must be ordered at least 24 hours in advance. Prices may vary based on market availability. 
                      Minimum orders may apply for certain items. Please contact us for current availability and special requests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-secondary mb-4">Additional Services</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Enhance your BBQ experience with these optional add-ons and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3">Beverage Service</h3>
              <p className="text-gray-700 mb-4">
                Non-alcoholic beverage station with classic Brazilian Guarana, Coca-Cola, and water.
              </p>
              <p className="text-lg font-semibold text-primary">Starting at $6 per person</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3">Dessert Station</h3>
              <p className="text-gray-700 mb-4">
                A selection of housemade desserts including brownies, cupcakes, and the classic Brazilian brigadeiro.
              </p>
              <p className="text-lg font-semibold text-primary">Starting at $8 per person</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3">Serving Staff</h3>
              <p className="text-gray-700 mb-4">
                Have the steak be served right to your plate, at your disposal.
              </p>
              <p className="text-lg font-semibold text-primary">$30 per hour, per staff member</p>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-secondary mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Get answers to common questions about our BBQ catering services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  q: "How far in advance should I book my event?",
                  a: "We recommend booking at least 1 week before, but we'll still serve you as long as we have a spot available."
                },
                {
                  q: "Is there a minimum number of guests required?",
                  a: "No. If you want us to make a barbecue just for you, we'll do it. We're willing to negotiate a price if that's the case."
                },
                {
                  q: "Do you accommodate dietary restrictions?",
                  a: "We can accommodate dietary restrictions including gluten-free, and other allergies with advance notice. We do not accommodate for Vegetarian and Vegan however, as we believe BBQ can only be served to perfection with real meat."
                },
                {
                  q: "What is included in the price per person?",
                  a: "Our per-person pricing includes all food items listed in the package, serving equipment, disposable plates, utensils, napkins, and onsite cooking. Additional services are priced separately. If you want glass plates and silverware, you must provide it"
                },
                {
                  q: "How does payment work?",
                  a: "If you want us to buy the steak, you must pay for the steak upfront.We also require a 50% deposit for the labor to secure your date, with the remaining balance due on the day of the event. We accept cash, Zelle, and check."
                },
                {
                  q: "Do you provide tables and chairs?",
                  a: "Our standard packages do not include tables and chairs, but we can arrange rentals for an additional fee if requested."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-secondary mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 mb-4">
                Have more questions? We're happy to help!
              </p>
              <a href="/#contact" className="btn btn-primary">
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary bg-texture bg-blend-soft-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-6">Ready to Elevate Your Event with Authentic BBQ?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Whether you're planning a wedding, corporate event, or family gathering, our BBQ catering will make your occasion unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/#contact" className="btn btn-primary">
                Request a Quote
              </a>
              <Link to="/" className="btn bg-white text-secondary hover:bg-gray-100">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
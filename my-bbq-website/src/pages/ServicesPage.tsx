import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Clock, Users, Info } from 'lucide-react';

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
                src="https://images.pexels.com/photos/7939154/pexels-photo-7939154.jpeg" 
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
              <div className="bg-accent text-white text-sm font-bold px-4 py-1 rounded-full w-fit mb-4">Popular Choice</div>
              <h2 className="text-3xl font-display font-bold text-secondary mb-4">Brazilian BBQ Package</h2>
              <p className="text-xl text-primary font-bold mb-4">Starting at $25 per person</p>
              <p className="text-gray-700 mb-6">
                Experience the authentic flavors of Brazil with our traditional churrasco-style barbecue. Our skilled grill masters will prepare a variety of premium cuts using traditional techniques for a memorable dining experience.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">What's Included:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Picanha Steak</span> - The king of Brazilian cuts, seasoned with rock salt and slow grilled to perfection</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Linguiça Sausage</span> - Traditional Brazilian pork sausage with a hint of garlic and spices</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Brazilian Rice</span> - Garlic-infused rice with onions and fresh herbs</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Farofa</span> - Traditional toasted cassava flour mixture</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Vinaigrette Salsa</span> - Fresh tomato, bell pepper, and onion salsa</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Grilled Pineapple</span> - Sweet pineapple caramelized with cinnamon sugar</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <Clock className="text-primary mr-2" size={20} />
                  <span>3-4 hours service</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <Users className="text-primary mr-2" size={20} />
                  <span>10-200 guests</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#contact" className="btn btn-primary">
                  Request a Quote
                </a>
                <button className="btn bg-white text-secondary border border-secondary hover:bg-gray-100">
                  Download Menu PDF
                </button>
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
              <h2 className="text-3xl font-display font-bold text-secondary mb-4">American BBQ Package</h2>
              <p className="text-xl text-primary font-bold mb-4">Starting at $20 per person</p>
              <p className="text-gray-700 mb-6">
                Enjoy classic American barbecue favorites, perfect for casual gatherings, family reunions, and backyard parties. Our American BBQ package brings the authentic taste of traditional American grilling to your event.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">What's Included:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Gourmet Burgers</span> - Premium beef patties with assorted toppings and buns</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Hot Dogs</span> - Premium beef franks with classic and gourmet toppings</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Coleslaw</span> - Creamy cabbage slaw with our secret dressing</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Potato Salad</span> - Classic American-style with eggs and fresh herbs</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Corn on the Cob</span> - Sweet corn grilled and brushed with herb butter</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success mt-1 mr-2 flex-shrink-0" />
                    <span><span className="font-semibold">Watermelon</span> - Fresh, seasonal slices (when available)</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <Clock className="text-primary mr-2" size={20} />
                  <span>2-3 hours service</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg">
                  <Users className="text-primary mr-2" size={20} />
                  <span>10-150 guests</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#contact" className="btn btn-primary">
                  Request a Quote
                </a>
                <button className="btn bg-white text-secondary border border-secondary hover:bg-gray-100">
                  Download Menu PDF
                </button>
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
                src="https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg" 
                alt="American BBQ" 
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </motion.div>
          </div>

          {/* Coming Soon Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-accent">
            <div className="flex items-start">
              <Info size={28} className="text-accent mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">More BBQ Packages Coming Soon!</h3>
                <p className="text-gray-700">
                  We're working on expanding our menu with more exciting BBQ options and fusion cuisine. 
                  Stay tuned for Caribbean-style, Argentinian, and Southern BBQ packages. 
                  Have a particular BBQ style in mind? Let us know when you contact us!
                </p>
              </div>
            </div>
          </div>
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
                Non-alcoholic beverage station with lemonade, iced tea, and water. Alcoholic options available upon request.
              </p>
              <p className="text-lg font-semibold text-primary">Starting at $5 per person</p>
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
                A selection of housemade desserts including brownies, cookies, and seasonal fruit cobbler.
              </p>
              <p className="text-lg font-semibold text-primary">Starting at $7 per person</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3">Staff Service</h3>
              <p className="text-gray-700 mb-4">
                Additional serving staff to help with setup, service, and cleanup for your event.
              </p>
              <p className="text-lg font-semibold text-primary">$35 per hour, per staff member</p>
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
                  a: "We recommend booking at least 2-3 weeks in advance for smaller events and 4-6 weeks for larger events. Peak season (summer months) may require more advance notice."
                },
                {
                  q: "Is there a minimum number of guests required?",
                  a: "Our standard packages require a minimum of 10 guests. For smaller groups, we offer modified packages with adjusted pricing."
                },
                {
                  q: "Do you accommodate dietary restrictions?",
                  a: "Yes, we can accommodate most dietary restrictions including vegetarian, vegan, gluten-free, and other allergies with advance notice."
                },
                {
                  q: "What is included in the price per person?",
                  a: "Our per-person pricing includes all food items listed in the package, serving equipment, disposable plates, utensils, napkins, and onsite cooking. Additional services are priced separately."
                },
                {
                  q: "How does payment work?",
                  a: "We require a 50% deposit to secure your date, with the remaining balance due 7 days before your event. We accept credit cards, checks, and electronic transfers."
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
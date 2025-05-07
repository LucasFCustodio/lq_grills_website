import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  eventType: string;
  message: string;
  package: string;
  premiumAddons: {
    [key: string]: number;
  };
  additionalServices: string[];
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    eventType: '',
    message: '',
    package: '',
    premiumAddons: {},
    additionalServices: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddonChange = (addon: string, quantity: number) => {
    setFormData(prev => ({
      ...prev,
      premiumAddons: {
        ...prev.premiumAddons,
        [addon]: quantity
      }
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => {
      const services = prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service];
      return {
        ...prev,
        additionalServices: services
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;        // your actual service ID
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;      // replace with your template ID
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;     // your EmailJS public key

    // Convert premiumAddons object to a readable string
    const formattedAddons = Object.entries(formData.premiumAddons)
    .filter(([_, quantity]) => quantity > 0)
    .map(([addon, quantity]) => `${addon} x${quantity}`)
    .join(', ') || 'None';

    // Convert additionalServices array to string
    const formattedServices = formData.additionalServices.length > 0
      ? formData.additionalServices.join(', ')
      : 'None';

    // Create a copy of formData with converted fields
    const emailData = {
      ...formData,
      premiumAddons: formattedAddons,
      additionalServices: formattedServices
    };
  
    emailjs.send(serviceID, templateID, emailData as unknown as Record<string, unknown>, userID)
      .then(() => {
        console.log('Email sent successfully!');
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '',
          eventType: '',
          message: '',
          package: '',
          premiumAddons: {},
          additionalServices: []
        });
      })
      .catch((error) => {
        console.error('Email send error:', error);
        alert('Something went wrong. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const premiumAddons = [
    { name: "Tomahawk Steak", price: "$69.99 per steak" },
    { name: "Chicken Hearts", price: "$10.99 per pound" },
    { name: "Rump Steak", price: "$24.99 per pound" },
    { name: "Garlic Bread", price: "$10.99 per pound" },
  ];

  const additionalServices = [
    { name: "Beverage Service", price: "Starting at $6 per person" },
    { name: "Dessert Station", price: "Starting at $8 per person" },
    { name: "Staff Service", price: "$30 per hour, per staff member" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      <h3 className="text-2xl font-display font-bold text-secondary mb-6">Request a Quote</h3>
      
      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-success-light/20 border border-success text-success-dark p-4 rounded-md"
        >
          <p className="font-medium">Thank you for your inquiry!</p>
          <p>We've received your information and will get back to you within 24 hours.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input pl-10"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number*
              </label>
              <div className="relative">
                <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input pl-10"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Event Date*
              </label>
              <div className="relative">
                <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="input pl-10"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Event Time*
              </label>
              <div className="relative">
                <Clock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="input pl-10"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                Number of Guests*
              </label>
              <div className="relative">
                <Users size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="input pl-10"
                  placeholder="25"
                  min="1"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                Event Type*
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="input"
                required
              >
                <option value="">Select Event Type</option>
                <option value="Corporate">Corporate Event</option>
                <option value="Birthday">Birthday Party</option>
                <option value="Family">Family Gathering</option>
                <option value="Friends">Party with Friends</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">
              Select Package
            </label>
            <select
              id="package"
              name="package"
              value={formData.package}
              onChange={handleChange}
              className="input"
            >
              <option value="">Select a Package (Optional)</option>
              <option value="brazilian">Brazilian BBQ Package (Starting at $150)</option>
              <option value="american">American BBQ Package (Starting at $150)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Premium Add-ons (Optional)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {premiumAddons.map((addon) => (
                <div key={addon.name} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <div>
                    <p className="font-medium">{addon.name}</p>
                    <p className="text-sm text-gray-600">{addon.price}</p>
                  </div>
                  <input
                    type="number"
                    min="0"
                    value={formData.premiumAddons[addon.name] || 0}
                    onChange={(e) => handleAddonChange(addon.name, parseInt(e.target.value) || 0)}
                    className="w-20 input"
                    placeholder="0"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Additional Services (Optional)
            </label>
            <div className="space-y-3">
              {additionalServices.map((service) => (
                <div key={service.name} className="flex items-center bg-gray-50 p-3 rounded-lg">
                  <input
                    type="checkbox"
                    id={service.name}
                    checked={formData.additionalServices.includes(service.name)}
                    onChange={() => handleServiceChange(service.name)}
                    className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                  />
                  <label htmlFor={service.name} className="ml-3">
                    <span className="font-medium">{service.name}</span>
                    <span className="text-sm text-gray-600 block">{service.price}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Information
            </label>
            <div className="relative">
              <MessageSquare size={18} className="absolute left-3 top-3 text-gray-400" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="input pl-10"
                placeholder="Tell us more about your event, any dietary requirements, or specific requests..."
              ></textarea>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit Request'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
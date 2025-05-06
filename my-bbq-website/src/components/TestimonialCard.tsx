import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  name: string;
  event: string;
  quote: string;
  rating: number;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, event, quote, rating, delay }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "fill-accent text-accent" : "text-gray-300"} 
          />
        ))}
      </div>
      <p className="italic text-gray-700 flex-grow">{quote}</p>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="font-semibold text-secondary">{name}</p>
        <p className="text-sm text-gray-600">{event}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
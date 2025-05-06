import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  link: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  image, 
  price,
  link,
  delay 
}) => {
  return (
    <motion.div 
      className="card group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div 
        className="h-64 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white text-xl font-display">{title}</p>
          <p className="text-accent font-semibold mt-1">{price}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 mb-4">{description}</p>
        <Link to={link} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
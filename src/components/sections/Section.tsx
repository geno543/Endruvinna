import React, { ReactNode } from 'react';
import Container from '../layout/Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  title?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id, 
  title 
}) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <Container>
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mars-chocolate mb-4">
              {title}
            </h2>
            <div className="w-24 h-1 bg-mars-red mx-auto"></div>
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;
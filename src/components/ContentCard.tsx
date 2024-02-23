
import React from 'react';

type ContentCardProps = {
  title: string;
  content: string;
};

const ContentCard: React.FC<ContentCardProps> = ({ title, content }) => {
  return (
    <div 
      className="text-white p-6 rounded-lg shadow-lg overflow-hidden relative"
      style={{
        maxWidth: '804.68px', 
        width: '90%', 
        minHeight: '195.57px', 
        background: '#0F0F23', 
        border: '1px solid transparent', 
        borderRadius: '10px', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        filter: 'drop-shadow(0 0 10px #686DFF) drop-shadow(0 0 30px #686DFF)', 
        margin: '2rem auto', 
      }}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-400">{content}</p>
    </div>
  );
};

export default ContentCard;

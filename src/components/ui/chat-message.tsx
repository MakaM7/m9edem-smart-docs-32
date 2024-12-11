import React from 'react';
import { Link, MapPin } from 'lucide-react';

interface ChatMessageProps {
  content: string;
  isUser: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ content, isUser }) => {
  const renderContent = (text: string) => {
    // Replace icon placeholders with actual Lucide icons
    const iconRegex = /{{([\w-]+)}}/g;
    const parts = text.split(iconRegex);

    return parts.map((part, index) => {
      if (index % 2 === 1) { // This is an icon name
        switch (part) {
          case 'link':
            return <Link key={index} className="inline-block h-4 w-4 mx-1" />;
          case 'map-pin':
            return <MapPin key={index} className="inline-block h-4 w-4 mx-1" />;
          default:
            return null;
        }
      }

      // Process markdown-style links
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const textParts = part.split(linkRegex);
      
      return textParts.map((textPart, textIndex) => {
        if (textIndex % 3 === 1) { // Link text
          return (
            <a
              key={`${index}-${textIndex}`}
              href={textParts[textIndex + 1]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-moroccan-blue hover:underline"
            >
              {textPart}
            </a>
          );
        } else if (textIndex % 3 === 0) { // Regular text
          return textPart;
        }
        return null;
      });
    });
  };

  return (
    <div
      className={`max-w-[80%] p-4 rounded-lg ${
        isUser
          ? 'bg-moroccan-blue text-white ml-4'
          : 'bg-moroccan-sand/20 text-moroccan-charcoal mr-4'
      }`}
      dir="rtl"
    >
      <div className="whitespace-pre-wrap font-['Noto_Naskh_Arabic']">
        {renderContent(content)}
      </div>
    </div>
  );
};
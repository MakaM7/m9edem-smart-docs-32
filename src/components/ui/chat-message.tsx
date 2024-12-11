import React from 'react';
import { Link, MapPin } from 'lucide-react';
import { useChatSettings } from '@/contexts/ChatSettingsContext';

interface ChatMessageProps {
  content: string;
  isUser: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ content, isUser }) => {
  const { settings } = useChatSettings();

  const renderContent = (text: string) => {
    const iconRegex = /{{([\w-]+)}}/g;
    const parts = text.split(iconRegex);

    return parts.map((part, index) => {
      if (index % 2 === 1) {
        const iconProps = {
          className: "inline-block h-4 w-4 mx-1",
          color: settings.iconColor
        };

        switch (part) {
          case 'link':
            return <Link key={index} {...iconProps} />;
          case 'map-pin':
            return <MapPin key={index} {...iconProps} />;
          default:
            return null;
        }
      }

      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const textParts = part.split(linkRegex);
      
      return textParts.map((textPart, textIndex) => {
        if (textIndex % 3 === 1) {
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
        } else if (textIndex % 3 === 0) {
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
      <div className={`whitespace-pre-wrap font-['Noto_Naskh_Arabic'] ${settings.fontSize} ${settings.fontWeight}`}>
        {renderContent(content)}
      </div>
    </div>
  );
};
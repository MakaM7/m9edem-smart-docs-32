import React from 'react';
import { ChatMessage } from '../ui/chat-message';
import { Message } from './types';

interface ChatMessagesListProps {
  messages: Message[];
  isLoading: boolean;
  onDocumentSearch: (document: string) => void;
}

export const ChatMessagesList: React.FC<ChatMessagesListProps> = ({
  messages,
  isLoading,
  onDocumentSearch,
}) => {
  return (
    <div className="flex-1 overflow-y-auto mb-4 space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <ChatMessage 
            content={message.content} 
            isUser={message.role === 'user'} 
            onDocumentSearch={onDocumentSearch}
          />
        </div>
      ))}
      {isLoading && (
        <div className="flex justify-start">
          <div className="bg-moroccan-sand/20 text-moroccan-charcoal p-4 rounded-lg mr-4">
            <p className="font-['Noto_Naskh_Arabic']">جاري التحميل...</p>
          </div>
        </div>
      )}
    </div>
  );
};